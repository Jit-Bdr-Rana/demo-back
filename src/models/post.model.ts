import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Category } from "./category.model";

@Table({
  tableName: "posts",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Post extends Model<Post> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id?: number;

  @Column({ field: "title", type: DataType.STRING })
  public title!: string;

  @Column({ field: "description", type: DataType.TEXT })
  public description!: string;

  @Column({ field: "slug", type: DataType.STRING, unique: true })
  public slug!: string;

  @ForeignKey(() => User)
  @Column({ field: "posted_by" })
  public userId!: number;

  @ForeignKey(() => User)
  @Column({ field: "category_id" })
  public categoryId!: number;

  @BelongsTo(() => User)
  public user!: User;

  @BelongsTo(() => User)
  public category!: Category;
}
