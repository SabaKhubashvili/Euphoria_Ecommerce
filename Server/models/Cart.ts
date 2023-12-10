const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
            quantity: {
                type: Number,
                default: 1
            },
            size:  {type: String,required:true}
        }
    ]
});

module.exports = mongoose.model('cart', CartSchema);
