const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req:any, res:any) => {
  const hashedPassword = await bcrypt.hash(req.body.password.toString(),15)

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);    
  }
});

module.exports = router;
