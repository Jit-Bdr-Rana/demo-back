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
    select p.title,p.slug,p.description,c."name" as categoryName,u.email as userEmail, u.username,json_agg(concat(:path,d.file_name))   from posts p
inner join categories c  on c.id =p.category_id
inner join users u   on u.id=p.posted_by 
left join post_image pi on pi.post_id =p.id
left join documents d  on d.doc_guid =pi.document_id::uuid
group by 1,2,3,4,5,6;
      `,
      { type: QueryTypes.SELECT, replacements: { path } }
    );
  }
}

export default new Postcontroller();
