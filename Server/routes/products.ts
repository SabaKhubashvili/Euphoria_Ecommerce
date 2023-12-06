const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const ProductSchema = require("../models/Product");
const UserSchema = require("../models/User");
const mongoose = require('mongoose')
import { Request, Response } from "express";


// getAllProducts
router.get("/getall", async (req: any, res: any) => {
  try {
    const products = await ProductSchema.find().populate('category');

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happened" });
  }
});

router.get('/getLimited/:quantity',async(req:any,res:any)=>{
  const quantity = req.params.quantity;
  
  try {
    const products = await ProductSchema.find().limit(quantity);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happened" });
  }
})

router.get('/get/:id', async (req: any, res: any) => {
  const productId = req.params.id;

  
  if (!mongoose.isValidObjectId(productId)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }
  try {
    const product = await ProductSchema.findById(productId).populate('category');

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
    // try {
      const {
        title,
        aboutProduct,
        advantages,
        description,
        images,
        availableSizes,
        price,
        category,
        brand
      } = req.body;
      
      if (
        !title ||
        !aboutProduct ||
        !advantages ||
        !description ||
        !images ||
        !availableSizes ||
        !price ||
        !category || !brand
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
        brand
      });

      await newProduct.save();

      return res
        .status(200)
        .json({ message: "Product sucesfully placed", success: true });
    // } catch (error) {
      return res.status(500).json({
        message: "Something went wrong adding product",
        success: false,
      });
    // }
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

router.put('/toggleFavorites/:id', verifyTokenAuthorization, async (req: Request & {user:any}, res:Response) => {
  const productId = req.params.id;

  try {
    const user = await UserSchema.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const product = await ProductSchema.findOne({_id:productId});
    
    if(!product){
      return res.status(404).json({message:"Product not found!"})
    }

    const isProductInFavorites = user.favorites.includes(productId);

    if (isProductInFavorites) {
      user.favorites = user.favorites.filter((fav:any) => fav === productId);
      await user.save();
      return res.status(200).json({message:'Sucess',add:false});
    } else {
      user.favorites.push(productId);
      await user.save();
      return res.status(200).json({message:'Sucess',add:true});
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/getAllFavorites',verifyTokenAuthorization, async(req:Request & {user:any},res:Response)=>{
  const userId = req.user.id;

  const user  = await UserSchema.findOne({
    _id:userId
  }).populate('favorites').select('favorites')
  
  const {favorites, ...otherData} = user;
  
  return res.status(200).json({favorites});
  
})

module.exports = router;
