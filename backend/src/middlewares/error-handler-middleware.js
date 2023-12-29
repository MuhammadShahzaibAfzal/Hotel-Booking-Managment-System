import { DEBUG_MODE } from "../config/index.js";
import ErrorHandlerService from "../services/error-handler-service.js";
import Joi from "joi";

const errorHandlerMiddleware = (err, req, res, next) => {
  let status = 500;
  let data = {
    message: "Internal Server Error !",
    statusCode: status,
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };

  if (err instanceof Joi.ValidationError) {
    status = 422;
    data = {
      message: err.message,
      statusCode: 422,
    };
  }

  if (err instanceof ErrorHandlerService) {
    status = err.status;
    data = {
      message: err.message,
      statusCode: status,
    };
  }

  return res.status(status).json(data);
};

export default errorHandlerMiddleware;
