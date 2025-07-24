import multer, { Multer } from "multer";
import path from "path";
import * as fs from "fs";
import { Request } from "express";
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const destination = path.join(__dirname, "../public/uploads");
    console.log(destination);
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }
    callback(null, destination);
  },
  filename: function (req, file, callback) {
    const filename = new Date().getTime();
    const extension = file.originalname.split(".");
    callback(null, `${filename}.${extension[extension.length - 1]}`);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, callback: any) => {
  const validMimetype = ["image/jpg", "image/png", "image/jpeg"];

  if (validMimetype.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("file format not support"));
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
