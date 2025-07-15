import {
  AutoIncrement,
  BelongsToMany,
  Column,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
} from "sequelize-typescript";
import { UserRole } from "./userRole.model";
import { Role } from "./role.model";

export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @BelongsToMany(() => Role, {
    through: {
      model: () => UserRole,
      unique: false,
    },
    foreignKey: "d",
  })
  roles!: Role[];

  @HasOne(() => User, { foreignKey: "user" })
  roless!: Role[];
}
