// babel --> to convert highlevel ES6 into low level ES5 language for understanding of the machine
import 'dotenv/config';
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: true}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(bodyParser.json());


/*
import {FoodModel, ImageModel,
  MenuModel,
  OrderModel,
  RestaurantModel,
  ReviewModel,
  UserModel} from "./database/allModels.js";

  */

mongoose.connect(
  process.env.MONGO_URL
  ).then(() => console.log("Connection Established!!"));


zomato.get("/" , (req,res) => res.json({mesage: "setup success"}));

zomato.listen(4000, () => console.log("server is up and running"));