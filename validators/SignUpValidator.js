import Joi from "joi";

const signUpValidator = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string.",
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
    "any.required": "Email is required.",
  }),
  password: Joi.string().min(8).required().messages({
    "string.base": "Password must be a string.",
    "string.empty": "Password is required.",
    "string.min": "Password must be at least 8 characters long.",
    "any.required": "Password is required.",
  }),
  role: Joi.string().valid("admin", "user").messages({
    "string.base": "Role must be a string.",
    "any.only": "Role must be either 'admin' or 'user'.",
  }),
});

export default signUpValidator;
