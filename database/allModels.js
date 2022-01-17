import {FoodModel} from "./food";
import {ImageModel} from "./image";
import {MenuModel} from "./menu";
import {OrderModel} from "./order";
import {RestaurantModel} from "./restaurant";
import {ReviewModel} from "./reviews";
import {UserModel} from "./user";

mongoose.connect(
  process.env.MONGO_URL
  ).then(() => console.log("Connection Established!!"));

export {
  FoodModel,
  ImageModel,
  MenuModel,
  OrderModel,
  RestaurantModel,
  ReviewModel,
  UserModel
};