import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  tableName: "categories",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Category extends Model<Category> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id?: number;

  @Column({ field: "name", type: DataType.STRING })
  public name!: string;

  @Column({ field: "title", type: DataType.STRING })
  public title!: string;
}
