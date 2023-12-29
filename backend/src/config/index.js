import { config } from "dotenv";
config();

export const {
  PORT,
  DB_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  DEBUG_MODE,
} = process.env;
