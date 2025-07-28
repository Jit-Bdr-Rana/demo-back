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
    const files = req.files;

    console.log(files);

    res.send({
      message: "Post has been saved successfully",
      status: true,
      data: post,
    });
  }
}

export default new Postcontroller();
