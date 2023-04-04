"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./utils/connection"));
const files_model_1 = require("./model/files.model");
const files_controller_1 = require("./controller/files.controller");
var cors = require('cors');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = (0, express_1.default)();
app.use(cors());
app.get("/", (req, res) => {
    res.json({ message: "Wel-come to ConDigital File Uploader" });
});
app.post("/upload", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, files_controller_1.uploadFile)(req.file);
    res.json({ message: "File Uploaded Success-fully" });
}));
app.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, files_controller_1.getAllFiles)();
    res.json(data);
}));
app.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, files_controller_1.deleteFile)(req.params.id);
    res.json({ message: "File Deleted Success-fully" });
}));
app.listen(3002, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${3002}`);
    connection_1.default
        .authenticate()
        .then(() => {
        console.log("Connection has been established successfully.");
        (0, files_model_1.createTable)();
    })
        .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    });
});
