const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  aboutProduct: { type: String, required: true },
  otherInformation: { type: String, required: true },
  advantages: { type: String, required: true },
  images: { type: [String], required: true },
  avaiableSizes: {type: String ,required:true},
  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
