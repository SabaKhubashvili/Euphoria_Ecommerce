const router = require("express").Router();
const { verifyTokenAuthorization } = require("./verifyToken");
const Cart = require("../models/Cart");
const Product = require('../models/Product')


router.get("/getAll", verifyTokenAuthorization, async (req: any, res: any) => {
  try {
    const cartData = await Cart.findOne({ userId: req.user.id }).populate({
        path: 'products.productId',
        model: Product,
      });


    if (!cartData) {
      return res.status(404).json({ message: "Cart not found" });
    }

    return res.status(200).json(cartData);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/add", verifyTokenAuthorization, async (req: any, res: any) => {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if(!productId){
        return res.status(400).json({message:'ProductId is required'})
    } 
      try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({
        userId: userId,
        products: [],
      });
    }

    const existingProductIndex = cart.products.findIndex(
      (product:any) => product.productId.toString() === productId
    );

    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += quantity || 1;
    } else {
      cart.products.push({
        productId,
        quantity: quantity || 1,
      });
    }  

  
    await cart.save();


    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
