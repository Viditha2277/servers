// babel --> to convert highlevel ES6 into low level ES5 language for understanding of the machine
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/" , (req,res) => res.json({mesage: "setup success"}));

zomato.listen(4000, () => console.log("server is up and running"));