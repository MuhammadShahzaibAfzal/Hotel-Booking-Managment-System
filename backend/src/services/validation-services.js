import Joi from "joi";

export const registerUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  DOB: Joi.date().required(),
  address: Joi.string().required(),
  password: Joi.string().required(),
});
