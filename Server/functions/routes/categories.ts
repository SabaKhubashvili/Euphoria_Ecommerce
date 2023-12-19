import mongoose from 'mongoose'
const router = require("express").Router();
const {
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const categorySchema = require("../models/Category");

router.get("/getAll", async (req: any, res: any) => {
  try {
    const allCategories = await categorySchema.find();
    const filteredCategories = allCategories.map((coupon:any) => {
      const { __v, ...rest } = coupon._doc;
      return rest;
    });
    return res.status(200).json(filteredCategories);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong getting categories" });
  }
});

router.put(
  "/add",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "name not provided" });
      }

      const newCategory = new categorySchema({
        name: name,
      });
      await newCategory.save();
      return res.status(200).json({ message: "Category sucesfully placed" });
    } catch (err) {
      return res.status(500).json({
        message: "Something went wrong adding product",
      });
    }
  }
);
router.delete(
  "/:id",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }
      
      const result = await categorySchema.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return res
          .status(404)
          .json({ message: "Category not found", success: false });
      }

      return res.status(200).json({ message: "Category successfully deleted" });
    } catch (err) {
      console.error(err);
      
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
);

module.exports = router;
