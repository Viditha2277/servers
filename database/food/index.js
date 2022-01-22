import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  descript: {type: String, required: true},
  isVeg: {type: Boolean, required: true},
  isContainsEgg: {type: Boolean, required: true},
  category: {type: String, required: true},
  price: {type: Number, default: 150, required: true }
  /*photos: {
    type: mongoose.Types.ObjectId,
    ref: "Images"
  },
  
  addOns: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Foods"
    }
  ],
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurants",
    required: true
  }
},
{
  timestamps: true */
});

export const FoodModel = mongoose.model("Foods", FoodSchema);

/*
Postman Format

{
	"food":{
		"name": "name2",
		"descript": "nothing2",
		"isVeg": true,
		"isContainsEgg": false,
		"category": "Veg",
		"price": 145
	}
}

*/