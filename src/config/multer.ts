import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import fs from "fs";
import path from "path";
export const storage = multer.diskStorage({
  destination: async function (req, file, callback) {
    const uploaddir = path.join(__dirname, "../public");
    if (!fs.existsSync(uploaddir)) {
      fs.mkdirSync(uploaddir);
    }
    callback(null, uploaddir);
  },
  filename: function (req, file, callback) {
    const extension = file.originalname.split(".");
    callback(
      null,
      new Date().getTime() + "." + extension[extension.length - 1]
    );
  },
});

const filefilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg"
  ) {
    callback(null, true);
  } else {
    callback(new Error("Only image files are allowed!"));
  }
};

export const upload = multer({ storage: storage, fileFilter: filefilter });
