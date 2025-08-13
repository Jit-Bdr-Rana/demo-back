import { DocumentModel } from "@models/document.model";
import { PostImage } from "@models/post-image.model";
import { Post } from "@models/post.model";
import { Request, Response } from "express";
import { QueryTypes } from "sequelize";

class Postcontroller {
  async savePost(req: Request, res: Response) {
    const payload = req.body;

    let slug = payload.title.toLowerCase().split(" ").join("-");
    const alreadyExist: any = await Post.sequelize?.query(
      `select count(slug) from posts b where b.slug like :slug`,
      {
        replacements: { slug: slug + "%" },
        type: QueryTypes.SELECT,
      }
    );
    console.log(alreadyExist);
    const counts = parseInt(alreadyExist[0].count);
    if (counts > 0) {
      slug = slug.concat(`-${+counts + 1}`);
    }
    //saving post
    const post = new Post();
    post.categoryId = payload.categoryId;
    post.title = payload.title;
    post.slug = slug;
    post.description = payload.description;
    post.userId = payload.userId;

    await post.save();

    //mapping document
    const files = req?.files as Express.Multer.File[];

    for (let i = 0; i < files.length; i++) {
      const document = new DocumentModel();
      document.size = files[i].size;
      document.mimeType = files[i].mimetype;
      document.originalName = files[i].originalname;
      document.path = files[i].path;
      document.fileName = files[i].filename;
      await document.save();

      const postImage = new PostImage();
      postImage.postId = post.id;
      postImage.documentId = document.docGuid;
      await postImage.save();
    }

    res.send({
      message: "Post has been saved successfully",
      status: true,
      data: post,
    });
  }

  async getAllPost(request: Request, response: Response) {
    const path = "http://localhost:5000/uploads/";
    const findAllPost = await Post.sequelize?.query(
      `
   SELECT 
    p.title,
    p.slug,
    p.description,
    c."name" AS categoryName,
    u.email AS userEmail,
    u.username,
    json_agg(concat(:path, d.file_name)) FILTER (WHERE d.file_name IS NOT NULL) AS images
FROM posts p
INNER JOIN categories c ON c.id = p.category_id
INNER JOIN users u ON u.id = p.posted_by 
LEFT JOIN post_image pi ON pi.post_id = p.id
LEFT JOIN documents d ON d.doc_guid = pi.document_id::uuid
GROUP BY 1,2,3,4,5,6;

      `,
      { type: QueryTypes.SELECT, replacements: { path } }
    );
    response.send({
      message: "Posts retrieved successfully",
      status: true,
      data: findAllPost,
    });
  }
}

export default new Postcontroller();
