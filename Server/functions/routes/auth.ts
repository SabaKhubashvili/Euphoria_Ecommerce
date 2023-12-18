const router = require("express").Router();
const User = require("../models/User.ts");
const Confirmations = require("../models/UserConfirmations.ts");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Request, Response } = require("express");

router.post("/register", async (req: any, res: any) => {
  try {
    const { firstname, lastname, email, password, confirmationCode } = req.body;
    if (
      !firstname ||
      !lastname ||
      !email ||
      !confirmationCode || !password
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // const doesUserExist = await User.findOne({ email: req.body.email })

    // if(doesUserExist?._doc){
    //   return res.status(409).json({message: "Email is already registered"})
    // }
    const confCode_DB = await Confirmations.findOne({ email: req.body.email })
      .sort({ $natural: -1 })
      .limit(1);

    if (confCode_DB.passCode !== req.body.confirmationCode) {
      return res.status(401).json({ message: "Incorrect verification code" });
    }

    const hashedPassword = await bcryptjs.hash(req.body.password.toString(), 15);

    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req: any, res: any) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const comparePass = await bcryptjs.compare(req.body.password, user.password);
    if (!comparePass) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, _id, isAdmin, createdAt, updatedAt, __v, ...userData } =
      user._doc;
    return res.status(200).json({ ...userData, accessToken });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
