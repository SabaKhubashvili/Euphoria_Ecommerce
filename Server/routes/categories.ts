const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const categorySchema = require("../models/Category");
const mongoose = require("mongoose");

router.get(
  "/getAll",
  async (req: any, res: any) => {
    try {
      const allCategories = await categorySchema.find();

      return res.status(200).json(allCategories);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong getting categories" });
    }
  }
);

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
      return res
        .status(200)
        .json({ message: "Category sucesfully placed"});
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong adding product",
          });
    }
  }
);


module.exports = router