const router = require("express").Router();
const { verifyTokenAuthorization } = require("./verifyToken");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

router.get("/getAll", verifyTokenAuthorization, async (req: any, res: any) => {
  try {
    const cartData = await Cart.findOne({ userId: req.user.id }).populate({
      path: "products.product",
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
  const { productId, quantity, size } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "ProductId is required" });
  }
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({
        userId: userId,
        products: [],
      });
    }

    cart.products.push({
      product: productId,
      quantity: quantity || 1,
      size,
    });

    await cart.save();

    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete(
  "/remove/:id",
  verifyTokenAuthorization,
  async (req: any, res: any) => {
    const userId = req.user.id;
    const productId = req.params.id;

      try {
      let cart = await Cart.findOne({ userId });
      const deletable = cart.products.filter((product: any) => product.id !== productId);

      cart.products = deletable;
      await cart.save();

      return res
        .status(200)
        .json({ message: "sucesfully removed", success: true });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong", success: false });
    }
  }
);

module.exports = router;
