import Joi from "joi";

const bookValidator = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name is required.",
    "any.required": "Name is required.",
  }),
  author: Joi.string()
    .required()
    .pattern(/^[0-9a-fA-F]{24}$/) // Validates MongoDB ObjectId
    .messages({
      "string.base": "Author must be a string (Author ID).",
      "string.empty": "Author is required.",
      "string.pattern.base": "Author must be a valid ObjectId.",
      "any.required": "Author is required.",
    }),
  price: Joi.number().required().min(0).messages({
    "number.base": "Price must be a number.",
    "number.min": "Price cannot be negative.",
    "any.required": "Price is required.",
  }),
  publicationDate: Joi.date().messages({
    "date.base": "Publication Date must be a valid date.",
  }),
  categories: Joi.array()
    .items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)) // Validates ObjectIds
    .messages({
      "array.base": "Categories must be an array of IDs.",
      "string.pattern.base": "Each category ID must be a valid ObjectId.",
    }),
  pages: Joi.number().min(1).messages({
    "number.base": "Pages must be a number.",
    "number.min": "Pages must be at least 1.",
  }),
  publisher: Joi.string().messages({
    "string.base": "Publisher must be a string.",
  }),
  inStock: Joi.boolean().messages({
    "boolean.base": "In Stock must be a boolean value.",
  }),
  stockQuantity: Joi.number().min(0).messages({
    "number.base": "Stock Quantity must be a number.",
    "number.min": "Stock Quantity cannot be negative.",
  }),
  languages: Joi.array().items(Joi.string()).messages({
    "array.base": "Languages must be an array of strings.",
  }),
  ratings: Joi.number().min(0).max(5).messages({
    "number.base": "Ratings must be a number.",
    "number.min": "Ratings cannot be less than 0.",
    "number.max": "Ratings cannot be more than 5.",
  }),
  isDigital: Joi.boolean().messages({
    "boolean.base": "Is Digital must be a boolean value.",
  }),
  copiesSold: Joi.number().min(0).messages({
    "number.base": "Copies Sold must be a number.",
    "number.min": "Copies Sold cannot be negative.",
  }),
});

export default bookValidator;
