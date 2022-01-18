import mongoose from "mongoose";
import allModels from "allModels.js";

import dotenv from"dotenv";
dotenv.config();

export default async () => {
    return mongoose.connect(
      process.env.MONGO_URL
      ).then(() => console.log("Connection Established!!"));
};

/*
mongoose.connect(
  process.env.MONGO_URL
).then(() => console.log("Connection Established!!"));
*/