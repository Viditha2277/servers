import express from "express";

import {RestaurantModel} from "../../database/allModels";
import {ValidateRestaurantCity, ValidateRestaurantSearchString} from "../../validation/restaurant";
import {ValidateRestaurantId} from "../../validation/food";
const Router = express.Router();

/*
Route        /restaurant
Des          Get all the restaurant details
Params       None
Access       Public
Method       GET
*/

Router.get("/restaurant", async(req,res)=> {
  try {
    await ValidateRestaurantCity(req.query);
    const {city} = req.query;
    const restaurants = await RestaurantModel.find({city});
    return res.json({restaurants});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route        /restaurant
Des          Get a particular restaurant details based on id
Params       _id
Access       Public
Method       GET
*/

Router.get("/restaurant/:_id", async(req,res)=> {
  try {
    await ValidateRestaurantId(req.params);
    const {_id} = req.params;
    const restaurant = await RestaurantModel.findOne(_id);
    return res.json({restaurant});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route        /restaurant/search
Des          Get a particular restaurant details based on id
Params       searchString
Access       Public
Method       GET
*/

Router.get("/restaurant/search", async(req,res)=> {
  try {
    await ValidateRestaurantSearchString(req.body);
    const {searchString} = req.body;
    const restaurants = await RestaurantModel.find({
      name: {$regex: searchString, $options: "i"}
    });
    return res.json({restaurants});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;