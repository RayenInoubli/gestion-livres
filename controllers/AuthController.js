import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import signUpValidator from "../validators/SignUpValidator.js";

export const signup = async (req, res, next) => {
  try {

    const { error, value } = signUpValidator.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).json({
        errors: error.details.map((err) => err.message),
      });
    }

    const existingUser = await User.findOne({ email: value.email });
    if (existingUser) {
      return res.status(400).json({
        msg: "Email is already in use.",
      });
    }

    const hashedPassword = await bcrypt.hash(value.password, 10);

    const user = new User({
      ...value,
      password: hashedPassword,
    });
    await user.save();
    const { password, ...newUser } = user.toObject();
    res.status(200).json({
      msg: "user created",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ login: req.body.login });
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({
      msg: "success",
      token: token,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
