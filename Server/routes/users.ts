const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyToken,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Update user
router.put("/:id", verifyTokenAuthorization, async (req: any, res: any) => {
  if (req.body.password) {
    req.body.password = bcrypt.hash(req.body.password);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Something wrong happened" });
  }
});

// Delete user
router.delete("/:id", verifyTokenAndAdminAuthorization, async (req:any, res:any) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// Get user
router.get("/find/:id", verifyTokenAuthorization, async (req: any, res: any) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...userData } = user._doc;
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something wrong happened" });
  }
});

// Get all user
router.get(
  "/users",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Something wrong happened" });
    }
  }
);

// Get user stats
router.get("/stats", verifyTokenAndAdminAuthorization, async (req: any, res: any) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Something wrong happened" });
  }
});

module.exports = router;
