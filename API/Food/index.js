import express from "express";

import {FoodModel} from "../../database/allModels";

import {ValidateRestaurantId, ValidateCategory} from "../../validation/food";

const Router = express.Router();

/*
Route        /food
Des          Get all the foods based on particular restaurant
Params       _id
Access       Public
Method       GET
*/

Router.get("/food/:_id", async(req,res)=> {
  try {
     await ValidateRestaurantId(req.params);
      const {_id} = req.params;
      const foods = await FoodModel.find({restaurant: _id});
      return res.json({foods});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route        /food/r
Des          Get all the foods based on particular category
Params       category
Access       Public
Method       GET
*/

Router.get("/food/r/:category", async(req,res)=> {
  try {
    await ValidateCategory(req.params);
    const {category} = req.params;
    const foods = await FoodModel.find({
      category: {$regex: category, $options: "i"}
    });
    return res.json({foods});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

// dummy api's

Router.get("/dummy/food/:name",async (req,res) => {
  const getFood = await FoodModel.findOne({name: req.params.name});

   if(!getFood) {
     return res.json({
       error: `Sorry! food name of ${req.params.name} is not available`
     });
   }

   return res.json({Food: getFood});

 });

 Router.post("/dummy/food/new", async (req,res)=> {
  const { newFood } = req.body;
  const addNewFood = FoodModel.create(newFood)
  return res.json({foods: addNewFood, message: "Food item was added!"});
});

export default Router;