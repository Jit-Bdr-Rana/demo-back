import { roleRouter } from "@routes/role.roue";
import { userRouter } from "@routes/user.route";
import sequelize from "config/config";
import express from "express";
import cors from "cors";
import swaggerUIExpress from "swagger-ui-express";
import { swaggerDocs } from "@config/swagger";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/role", roleRouter);
app.use("/docs", swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDocs));

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => {
    console.log("htttp://localhost:5000");
    console.log(swaggerDocs);
  });
});
