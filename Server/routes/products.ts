const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const Product = require("../models/Product");

// getAllProducts
router.get("/getall", async (req: any, res: any) => {
  try {
    const products = await Product.find();
    console.log(products);

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happened" });
  }
});

router.put(
  "/addProduct",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    try {
      const {
        title,
        description,
        img,
        availableSizes,
        availableColors,
        price,
      } = req.body;

      if (
        !title ||
        !description ||
        !img ||
        !availableSizes ||
        !availableColors ||
        !price
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newProduct = new Product({
        title,
        description,
        img,
        availableColors,
        availableSizes,
        price,
      });

      await newProduct.save();

      return res
        .status(200)
        .json({ message: "Product sucesfully placed", success: true });
    } catch (error) {
      return res
        .status(500)
        .json({
          message: "Something went wrong adding product",
          success: false,
        });
    }
  }
);

module.exports = router;
