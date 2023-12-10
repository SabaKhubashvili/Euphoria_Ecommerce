const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    paypall_id:{type:String,required:true},
    userId: { type: mongoose.Schema.Types.ObjectId, required: true,  ref: 'user', },
    products: [
        {
            ProductId:{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product'
            },
            quantity:{
                type:Number,
                default:1
            },
            size:{type:String,required:true}
        }
    ],
    adressInfo:{
        streetAdress:{type:Number,required:true},
        city:{type:String,required:true},
        phone:{type:String,required:true},
        email:{type:String,required:true},
        firstname:{type:String,required:true},
        lastname:{type:String},
    },
    status:{type: String ,required:true,default:"pending"}
  });
  
  module.exports = mongoose.model('Order',OrderSchema)