import { Request, Response } from "express";
const  router  = require("express").Router();
const { verifyTokenAndAdminAuthorization } = require("./verifyToken");
const orderSchema = require("../models/Order");

router.get(
  "/getAll",
  verifyTokenAndAdminAuthorization,
 async(req: Request, res: Response) => {
    try {
      const orders = await orderSchema.find().populate('products.product');      
      return res.status(200).json(orders);
    } catch (err) {
        console.log(err);
        
      return res
        .status(500)
        .json({ message: "Something went wrong on server" });
    }
  }
);

module.exports = router;
