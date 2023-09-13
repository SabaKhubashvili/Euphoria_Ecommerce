const OrderSchema = new mongoose.Schema({
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
    ],
    amount:{type:Number,required:true},
    adress:{type:String,required:true},
    city:{type:String,required:true},
    zipCode:{type:String,required:true},
    status:{type:String,required:true,default:"pending"}
  });
  
  module.exports = mongoose.model('order',OrderSchema)