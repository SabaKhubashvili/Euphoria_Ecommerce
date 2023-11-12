import { Request, Response } from "express";
const router = require("express").Router();
const { verifyTokenAuthorization } = require("../routes/verifyToken");
const Coupon = require("../models/Coupon");

router.post(
  "/check",
  verifyTokenAuthorization,
  async (req: Request, res: Response) => {
    const code = req.body.code;
    
    if (!code) {
      return res.status(400).json({ message: "Coupon code is required" });
    }
    try {
      let coupon = await Coupon.findOne({
        code,
      });

      if (coupon !== null) {
        delete coupon._doc._id;
        return res.status(200).json({ success: true, coupon });
      }
      return res
        .status(200)
        .json({ message: "Coupon not found or incorrect", success: false });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = router;
