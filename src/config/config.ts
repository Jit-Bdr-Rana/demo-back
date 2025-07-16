import { Role } from "@models/role.model";
import { User } from "@models/user.model";
import { UserDetails } from "@models/userDetails.model";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5433,
  username: "jit",
  password: "jitjit",
  database: "demo",
  logging: true,
  models: [Role, User, UserDetails],
});

export default sequelize;
