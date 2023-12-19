const router = require("express").Router();
const {
  verifyTokenAuthorization,
  verifyTokenAndAdminAuthorization,
} = require("./verifyToken");
const User = require("../models/User");
import {Request,Response} from 'express'
import bcryptjs from 'bcryptjs'

function isValidObjectId(id:string) {
  const ObjectId = require('mongoose').Types.ObjectId;
  return ObjectId.isValid(id) && new ObjectId(id).toString() === id;
}

// Update user
router.put("/:id", verifyTokenAuthorization, async (req: any, res: any) => {
  if (req.body.password) {
    req.body.password = await bcryptjs.hash(req.body.password , 8);
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
  "/getAll",
  verifyTokenAndAdminAuthorization,
  async (req: any, res: any) => {
    try {
      const users = await User.find().select('-password');      
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Something wrong happened" });
    }
  }
);

//* Get user stats
// router.get("/stats", verifyTokenAndAdminAuthorization, async (req: any, res: any) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     return res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Something wrong happened" });
//   }
// });

// Make or remove admin


router.post('/admin/add', verifyTokenAndAdminAuthorization, async (req:Request, res:Response) => {
  try {
    const { id } = req.body;

    if (!id || !isValidObjectId(id)) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if(user.isAdmin === true){
      return res.status(400).json({message:"User already is admin"})
    } 
    user.isAdmin = true;

    const {_id,...updatedUser} = await user.save();

    return res.json({ message: "User updated successfully", userId: _id});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post('/admin/remove', verifyTokenAndAdminAuthorization, async (req:Request, res:Response) => {
  try {
    const { id } = req.body;

    if (!id || !isValidObjectId(id)) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if(user.isAdmin === false){
      return res.status(400).json({message:"User isn't admin"})
    } 


    user.isAdmin = false;

    const {_id,...updatedUser} = await user.save();

    return res.json({ message: "User updated successfully", userId: _id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
