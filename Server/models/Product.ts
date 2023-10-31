const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img:  { type: [String], required: true },
  availableSizes:  { type: [String], required: true },
  availableColors: { type: [String], required: true },
  price: { type: Number, required: true },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'category',
    required:true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
