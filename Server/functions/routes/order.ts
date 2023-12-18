const { Request, Response } = require("express");
const router = require("express").Router();
const { verifyTokenAndAdminAuthorization } = require("./verifyToken");
const orderSchema = require("../models/Order");

router.get(
  "/getAll",
  verifyTokenAndAdminAuthorization,
  async (req: Request, res: Response) => {
    try {
      const orders = await orderSchema
        .find()
        .populate("products.product")
        .sort({ $natural: -1 })

      return res.status(200).json(orders);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong on the server" });
    }
  }
);


router.post(
  "/updateStatus",
  verifyTokenAndAdminAuthorization,
  async (req: Request, res: Response) => {
    try {
      const { id, status } = req.body;

      const updated = await orderSchema.findOneAndUpdate({ _id: id }, { status });

      if (updated) {
        res.status(201).json({ message: "Sucesfully updated" });
      } else {
        res.status(404).json({
          message: "Order not found or not updated",
          success: false,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Something went wrong on server" });
    }
  }
);

module.exports = router;
