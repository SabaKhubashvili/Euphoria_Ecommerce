const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const ProductSchema = require("../models/Product");
const mongoose = require('mongoose')

// getAllProducts
router.get("/getall", async (req: any, res: any) => {
  try {
    const products = await ProductSchema.find();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something wrong happened" });
  }
});


router.get('/:id', async (req: any, res: any) => {
  const productId = req.params.id;

  if (!mongoose.isValidObjectId(productId)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }
  try {
    const product = await ProductSchema.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({ message: 'Internal server error' });
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
        images,
        avaiableSizes,
        price,
        category  
      } = req.body;

      if (
        !title ||
        !description ||
        !images ||
        !avaiableSizes ||
        !price ||
        !category
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newProduct = new ProductSchema({
        title,
        description,
        images,
        avaiableSizes,
        price:parseInt(price),
        category
      });

      await newProduct.save();

      return res
        .status(200)
        .json({ message: "Product sucesfully placed", success: true });
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong adding product",
        success: false,
      });
    }
  }
);          

router.delete(
  "/:id",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    const { id } = req.params;

    try {
      const product = ProductSchema.findOne(id);
      if(!product){
        res.status(400).json({ message: "Product not found", success: false });
      }

      await product.delete();
      return res
        .status(200)
        .json({ message: "Sucesfully deleted", success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong", success: false });
    }
  }
);

module.exports = router;
