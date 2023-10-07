const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

router.post("/register", async (req: any, res: any) => {
  
  try {
    if(!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password){
      return res.status(400).json({message:"All fields are required"})
    }
    const doesUserExist = await User.findOne({ email: req.body.email })

    
    if(doesUserExist?._doc){
      return res.status(409).json({message: "Email is already registered"})
    }
    const hashedPassword = await bcrypt.hash(req.body.password.toString(), 15);
    
    const newUser = new User({
      firstname: req.body.firstname,
      lastname:req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json('err');
  }
});

router.post("/login", async (req: any, res: any) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Wrong credentials" }); // Return here
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      return res.status(401).json({ message: "Wrong credentials" }); // Return here
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    );
    
    const { password, _id, ...userData } = user._doc;
    return res.status(200).json({ ...userData, accessToken }); // Return here
  } catch (error) {
    return res.status(500).json(error); // Return here
  }
});


module.exports = router;
