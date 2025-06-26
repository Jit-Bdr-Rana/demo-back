import sequelize from "config/config";
import express from "express";

const app = express();

app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log("htttp://localhost:3000");
  });
});
