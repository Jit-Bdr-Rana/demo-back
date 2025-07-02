import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  tableName: "roles",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Role extends Model<Role> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id?: number;

  @Column({ field: "name", type: DataType.STRING })
  public name!: string;

  @Column({ field: "description", type: DataType.TEXT })
  public description!: string;
}
