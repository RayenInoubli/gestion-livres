import Joi from "joi";

const eventValidator = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Event name must be a string.",
    "string.empty": "Event name is required.",
    "any.required": "Event name is required.",
  }),
  startDate: Joi.date().required().messages({
    "date.base": "Start date must be a valid date.",
    "any.required": "Start date is required.",
  }),
  endDate: Joi.date().greater(Joi.ref("startDate")).required().messages({
    "date.base": "End date must be a valid date.",
    "date.greater": "End date must be later than the start date.",
    "any.required": "End date is required.",
  }),
  location: Joi.string().required().messages({
    "string.base": "Location must be a string.",
    "string.empty": "Location is required.",
    "any.required": "Location is required.",
  }),
});

export default eventValidator;
