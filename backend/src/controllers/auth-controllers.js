import fs from "fs";
import bcrypt from "bcrypt";

import { uploadOnCloudinary } from "../services/cloudinary-service.js";
import ErrorHandlerService from "../services/error-handler-service.js";
import { registerUserValidationSchema } from "../services/validation-services.js";
import userService from "../services/user-service.js";
import UserDTO from "../services/dtos.js";

class AuthController {
  async registerUser(req, res, next) {
    const imageLocalPath = req?.file?.path;
    const { name, email, address, phoneNumber, password, DOB } = req.body;
    /* Validate image presence*/
    if (!imageLocalPath) {
      return next(
        ErrorHandlerService.badRequest("Profile image is required !")
      );
    }
    /* Validate request body */
    const { error } = registerUserValidationSchema.validate(req.body);
    if (error) {
      /* Delete locally uploaded image */
      try {
        fs.unlinkSync(imageLocalPath);
      } catch (error) {
        return next(error);
      }
      return next(error);
    }
    /* Check if email already exists */
    try {
      const isUserExist = await userService.findUser({ email });
      if (isUserExist) {
        /* Delete locally uploaded image */
        try {
          fs.unlinkSync(imageLocalPath);
        } catch (error) {
          return next(error);
        }
        return next(ErrorHandlerService.alreadyExist("Email is already exist"));
      }
    } catch (error) {
      return next(error);
    }
    /* Upload on cloudinary */
    const imagePath = await uploadOnCloudinary(imageLocalPath);
    /* Hash password  */
    const hashedPassword = await bcrypt.hash(password, 10);
    /* Save user into database */
    let user;
    try {
      user = await userService.saveUser({
        email,
        name,
        password: hashedPassword,
        DOB,
        address,
        imageURL: imagePath || "",
        phoneNumber,
      });
    } catch (error) {
      return next(error);
    }
    const userDTO = new UserDTO(user);
    res.status(201).json({
      data: userDTO,
      statusCode: 201,
      message: "User created successfully",
    });
  }
}

const authController = new AuthController();

export default authController;
