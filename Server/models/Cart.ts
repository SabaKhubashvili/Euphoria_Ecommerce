const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
});

module.exports = mongoose.model('cart', CartSchema);
