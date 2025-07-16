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

@Table({
  tableName: "user_details",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class UserDetails extends Model<UserDetails> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({ field: "first_name", type: DataType.STRING(100) })
  firstName!: string;

  @Column({ field: "middle_name", type: DataType.STRING(100) })
  middleName!: string;

  @Column({ field: "last_name", type: DataType.STRING(100) })
  lastName!: string;

  @Column({ type: DataType.STRING(250) })
  address!: string;

  @Column({ field: "phone_number", type: DataType.STRING(20) })
  phoneNumber!: string;

  //foreignkey mapping with user table
  @ForeignKey(() => User)
  @Column({ field: "user_id" })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
