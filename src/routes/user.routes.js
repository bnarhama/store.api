import { Router } from "express";
import User from "../models/user.model.js";
import userValidate from "../validations/user.validate.js";
import { isAdmin } from "../middleware/auth.middleware.js";
const userRouter = Router();

userRouter.post("/users", isAdmin, async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.massage });
  }
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

export default userRouter;
