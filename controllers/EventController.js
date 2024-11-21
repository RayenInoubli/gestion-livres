import Event from "../models/Event.js";
import eventValidator from "../validators/EventValidator.js";

export const createEvent = async (req, res) => {
  try {
    const { error, value } = eventValidator.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    const newEvent = await Event.create(value);

    return res.status(201).json({
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};
