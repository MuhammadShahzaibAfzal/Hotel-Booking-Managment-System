import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config/index.js";

/* CLOUDINARY CONFIGURATIONS */
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return;
    /* UPLOAD THE FILE ON CLOUDINARY */
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    /* FILE IS UPLOADED */
    console.log("File is uploaded on cloudinary");
    fs.unlinkSync(localFilePath);
    return response.url;
  } catch (error) {
    /* REMOVE THE LOCALLY SAVED TEMPORARY FILE AS THE UPLOADED OPERATION GOT FAILED */
    fs.unlinkSync(localFilePath);
    return null;
  }
};
