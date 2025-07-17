import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
} from "sequelize-typescript";

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
