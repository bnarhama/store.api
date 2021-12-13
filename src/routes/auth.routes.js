import { Router } from "express";
import User from "../models/user.model.js";
import userValidate from "../validations/user.validate.js";
import jwt from "jsonwebtoken";

const authRoutes = Router();

// login route
authRoutes.post("/register", async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.massage });
  }
  const user = new User(req.body);
  await user.save();
  res.json({ message: "user created" });
});

authRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign(JSON.stringify(user), process.env.JWT_KEY);
    res.json({ token });
  } else {
    res.status(400).json({ error: " invalid authentication data" });
  }
});

export default authRoutes;
