const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const ProductSchema = require("../models/Product");
const UserSchema = require("../models/User");
const mongoose = require("mongoose");
import { Request, Response } from "express";

// getAllProducts
router.get("/getall", async (req: any, res: any) => {
  try {
    const products = await ProductSchema.find().populate("category");

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happened" });
  }
});

router.get("/getLimited/:quantity", async (req: any, res: any) => {
  const quantity = req.params.quantity;

  try {
    const products = await ProductSchema.find().limit(quantity);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happened" });
  }
});

router.get("/get/:id", async (req: any, res: any) => {
  const productId = req.params.id;

  if (!mongoose.isValidObjectId(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }
  try {
    const product = await ProductSchema.findById(productId).populate(
      "category"
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put(
  "/addProduct",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    try {
      const {
        title,
        aboutProduct,
        advantages,
        description,
        images,
        availableSizes,
        price,
        category,
        brand,
        discount,
      } = req.body;

      if (
        !title ||
        !aboutProduct ||
        !advantages ||
        !description ||
        !images ||
        !availableSizes ||
        !price ||
        !category ||
        !brand
      ) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newProduct = new ProductSchema({
        title,
        aboutProduct,
        description,
        images,
        advantages,
        availableSizes,
        price,
        category,
        brand,
        discount,
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

router.put(
  "/update",
  verifyTokenAndAdminAuthorization,
  async (req: Request, res: Response) => {
    const {
      _id,
      title,
      aboutProduct,
      advantages,
      description,
      images,
      availableSizes,
      price,
      category,
      brand,
      discount,
    } = req.body;

    try {
      const updatedProduct = await ProductSchema.findOneAndUpdate(
        { _id: _id },
        {
          title,
          aboutProduct,
          description,
          images,
          advantages,
          availableSizes,
          price,
          category,
          brand,
          discount,
        }
      );

      if (updatedProduct) {
        res.status(201).json({ message: "Sucesfully updated" });
      } else {
        res.status(404).json({
          message: "Product not found or not updated",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: "Something went wrong",
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
    const ObjectId = mongoose.Types.ObjectId;

    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ message: "Invalid ID format", success: false });
    }

    try {
      const result = await ProductSchema.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return res
          .status(404)
          .json({ message: "Product not found", success: false });
      }

      return res
        .status(200)
        .json({ message: "Successfully deleted", success: true });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Something went wrong", success: false });
    }
  }
);
router.put(
  "/toggleFavorites/:id",
  verifyTokenAuthorization,
  async (req: Request & { user: any }, res: Response) => {
    const productId = req.params.id;

    try {
      const user = await UserSchema.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const product = await ProductSchema.findOne({ _id: productId });

      if (!product) {
        return res.status(404).json({ message: "Product not found!" });
      }

      const isProductInFavorites = user.favorites.includes(productId);

      if (isProductInFavorites) {
        user.favorites = user.favorites.filter((fav: any) => fav === productId);
        await user.save();
        return res.status(200).json({ message: "Sucess", add: false });
      } else {
        user.favorites.push(productId);
        await user.save();
        return res.status(200).json({ message: "Sucess", add: true });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.get(
  "/getAllFavorites",
  verifyTokenAuthorization,
  async (req: Request & { user: any }, res: Response) => {
    const userId = req.user.id;

    const user = await UserSchema.findOne({
      _id: userId,
    })
      .populate("favorites")
      .select("favorites");
    const { favorites, ...otherData } = user;
    return res.status(200).json({ favorites });
  }
);

router.post('/getRecommended', async (req: Request, res: Response) => {
  try {
    const { category, productId } = req.body;

    if (!category || !mongoose.isValidObjectId(category) || !productId || !mongoose.isValidObjectId(productId)) {
      return res.status(400).json({ error: 'Invalid category or productId' });
    }

    const recommendedProducts = await ProductSchema.find({
      category,
    });

    let additionalProducts = [];

    if (recommendedProducts.length < 7) {
      additionalProducts = await ProductSchema.find({
        category: { $ne: category },
      })
        .limit(7 - recommendedProducts.length)
        .exec();
    }

    const allProducts = [...recommendedProducts, ...additionalProducts];

    const filteredProducts = allProducts.filter(product => product._id.toString() !== productId);

    return res.status(200).json(filteredProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
