import {
  AutoIncrement,
  Column,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { UserDetails } from "./userDetails.model";

@Table({
  tableName: "users",
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column
  username!: string;

  @Column
  password!: string;

  @Column({ field: "is_active" })
  isActive!: boolean;

  @HasOne(() => UserDetails)
  userDetails!: UserDetails;
}
