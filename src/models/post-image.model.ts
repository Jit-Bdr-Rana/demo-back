import {
  AllowNull,
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Post } from "./post.model";
import { DocumentModel } from "./document.model";

@Table({
  tableName: "post_image",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class PostImage extends Model<PostImage> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number;

  @ForeignKey(() => Post)
  @Column({ field: "post_id", allowNull: false })
  postId?: number;

  @ForeignKey(() => DocumentModel)
  @Column({ field: "document_id", allowNull: false })
  documentId?: string;
}
