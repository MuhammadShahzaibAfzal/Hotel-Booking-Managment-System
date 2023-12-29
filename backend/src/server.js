import express from "express";
import { DB_URL, PORT } from "./config/index.js";
import authRouter from "./routes/auth-routes.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middlewares/error-handler-middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* REGISTER ROUTES */
app.use("/api/auth", authRouter);

/* ERROR HANDLER MIDDLEWARE */
app.use(errorHandlerMiddleware);

// MONGODB CONNECTIVITY
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully 🚀🚀");
    // CREATE SERVER AFTER DATABASE CONNECTED SUCCESSFULLY
    app.listen(PORT, () => {
      console.log(`Server is listning on port ${PORT} 🚀🚀`);
    });
  })
  .catch((err) => {
    console.log("Something went wrong while connecting to mongodb 😢🤦‍♂️");
    console.log(err);
  });
