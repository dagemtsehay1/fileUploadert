import express, { Express, Request, Response } from "express";
import sequelize from "./utils/connection";
import { createTable } from "./model/files.model";
import { deleteFile, getAllFiles, uploadFile } from "./controller/files.controller";
var cors = require('cors');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app: Express = express();
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Wel-come to ConDigital File Uploader" });
});

app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    await uploadFile(req.file);
    res.json({ message: "File Uploaded Success-fully" });
  }
);

app.get("/getAll", async (req: Request, res: Response) => {
  const data = await getAllFiles();
  res.json(data);
});

app.delete("/delete/:id",async (req: Request, res: Response) => {
    const data = await deleteFile(req.params.id);
    res.json({message:"File Deleted Success-fully"});
  });

app.listen(3002, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3002}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      createTable();
    })
    .catch((error: any) => {
      console.error("Unable to connect to the database: ", error);
    });
});
