import { roleRouter } from "@routes/role.roue";
import { userRouter } from "@routes/user.route";
import sequelize from "config/config";
import express from "express";
import cors from "cors";
import swaggerUIExpress from "swagger-ui-express";
import { swaggerDocs } from "@config/swagger";
import { exceptionHandler } from "@config/exception-filter";
import { upload } from "@config/multer";
import { postRouter } from "@routes/post.route";
import postController from "@controller/post.controller";
import { categoryRouter } from "@routes/category.route";
import path from "path";
import { authRouter } from "@routes/auth.route";
import { jwtMiddleware } from "@middleware/jwt.middleware";
const app = express();

app.use(cors());
app.use(express.json());
app.use(jwtMiddleware);
app.use("/api/user", userRouter);
app.use("/api/role", roleRouter);
app.use("/api/category", categoryRouter);
app.use("/docs", swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDocs));
app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(exceptionHandler);
sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => {
    console.log("http://localhost:5000");
    console.log(swaggerDocs);
  });
});
