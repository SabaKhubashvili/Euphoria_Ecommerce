const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

router.post("/register", async (req: any, res: any) => {
  const hashedPassword = await bcrypt.hash(req.body.password.toString(), 15);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req: any, res: any) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user){
      res.status(401).json({ message: "Wrong credentials" });
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if(!comparePass){
      res.status(401).json({ message: "Wrong credentials" });
    }

    const accessToken = jwt.sign({
      id:user._id,
      isAdmin:user.isAdmin
    },
      process.env.JWT_SECRET,
      {expiresIn:'3d'}
    )
    
    const {password,_id, ...userData} = user._doc
    res.status(200).json({...userData,accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
