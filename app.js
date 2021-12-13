import express from "express";
import userRouter from "./src/routes/user.routes.js";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth.routes.js";
import dotenv from "dotenv";

async function main() {
  dotenv.config("dotenv");
  await mongoose.connect(process.env.MONGO_URL);

  const app = express();

  // these two lines are used to parse the body of the requests that are sent to the server
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(userRouter);
  app.use(authRoutes);

  app.listen(process.env.port, () => {
    console.log("listening on    http://localhost:5000");
  });
}

main();
