const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  aboutProduct: { type: String, required: true },
  advantages: { type: String, required: true },
  images: { type: [String], required: true },
  availableSizes: {type: String ,required:true},
  price: { type: Number, required: true },
  brand: {type: String, required:true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  discount: {type:Number,required:false},
});

module.exports = mongoose.model('Product', ProductSchema);
