import File from "../model/files.model";
import fs from "fs";

export const uploadFile = async (fileDetail: any) => {
  const res = await File.create({
    name: fileDetail.filename,
    originalName: fileDetail.originalname,
    size: fileDetail.size,
  });

  console.log(res);
};

export const getAllFiles = async () => {
  const res = await File.findAll();
  return res;
};

export const deleteFile = async (id: any) => {
  const res = await File.findOne({
    where: {
      id: id,
    },
  });

  fs.unlinkSync(`./uploads/${res?.dataValues?.name}`);

  await File.destroy({
    where: {
      id: id,
    },
  });

  return true;
};
