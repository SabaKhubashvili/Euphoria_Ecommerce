const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: Array, required: true },
  avaiableSzies: { Type: Array, required: true },
  avaiableColors: { Type: Array, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('product',ProductSchema)