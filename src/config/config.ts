import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5433,
  username: "jit",
  password: "jitjit",
  database: "demo",
  logging: true,
});

export default sequelize;
