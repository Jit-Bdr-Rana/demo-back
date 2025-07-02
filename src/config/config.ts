import { Role } from "@models/role.model";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5433,
  username: "jit",
  password: "jitjit",
  database: "demo",
  logging: true,
  models: [Role],
});

export default sequelize;
