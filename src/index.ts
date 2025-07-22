import { roleRouter } from "@routes/role.roue";
import { userRouter } from "@routes/user.route";
import sequelize from "config/config";
import express from "express";
import cors from "cors";
import { swaggerSpec } from "@config/swagger";
import swaggerUIExpress from "swagger-ui-express";
import path from "path";
import { upload } from "@config/multer";
import { errorHandler } from "@config/errorhandler";
import { ApiError } from "@exception/exception";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/role", roleRouter);
app.use(
  "/api-docs",
  swaggerUIExpress.serve,
  swaggerUIExpress.setup(swaggerSpec)
);

app.post(
  "/api/upload",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]),
  (req: any, res: any, next: any) => {
    console.log(req.files);
    throw new ApiError(400, "File upload failed");
  }
);
app.use(express.static(path.join(__dirname, "./public")));
app.use(errorHandler);

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => {
    console.log("htttp://localhost:5000");
    console.log(JSON.stringify(swaggerSpec, null, 2));
    console.log(path.resolve(__dirname, "../routes/**/*.ts"));
    console.log(__dirname);
    console.log(path.resolve());
  });
});
