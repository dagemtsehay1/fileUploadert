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
exports.deleteFile = exports.getAllFiles = exports.uploadFile = void 0;
const files_model_1 = __importDefault(require("../model/files.model"));
const fs_1 = __importDefault(require("fs"));
const uploadFile = (fileDetail) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield files_model_1.default.create({
        name: fileDetail.filename,
        originalName: fileDetail.originalname,
        size: fileDetail.size,
    });
    console.log(res);
});
exports.uploadFile = uploadFile;
const getAllFiles = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield files_model_1.default.findAll();
    return res;
});
exports.getAllFiles = getAllFiles;
const deleteFile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const res = yield files_model_1.default.findOne({
        where: {
            id: id,
        },
    });
    fs_1.default.unlinkSync(`./uploads/${(_a = res === null || res === void 0 ? void 0 : res.dataValues) === null || _a === void 0 ? void 0 : _a.name}`);
    yield files_model_1.default.destroy({
        where: {
            id: id,
        },
    });
    return true;
});
exports.deleteFile = deleteFile;
