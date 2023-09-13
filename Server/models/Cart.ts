const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique:true },
    products: [
        {
            ProductId:{
                type:String
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
  });
  
  module.exports = mongoose.model('cart',CartSchema)