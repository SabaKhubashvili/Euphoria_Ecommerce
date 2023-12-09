import { Request, Response } from "express";
const router = require("express").Router();
const { verifyTokenAuthorization,verifyTokenAndAdminAuthorization } = require("../routes/verifyToken");
const Coupon = require("../models/Coupon");

router.post(
  "/check",
  verifyTokenAuthorization,
  async (req: Request, res: Response) => {
    const code = req.body.code;
    
    if (!code || code.length <= 0) {
      return res.status(404).json({ message: "Coupon not found or incorrect" });
    }
    
    try {
      let coupon = await Coupon.findOne({
        coupon:code,
      });
      
      if (coupon !== null) {
        const {percentage,code,...others} = coupon
        return res.status(200).json({ success: true, coupon:{percentage,code}});
      }
      return res
        .status(200)
        .json({ message: "Coupon not found or incorrect", success: false });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

router.put('/add',verifyTokenAndAdminAuthorization, async(req:Request,res:Response)=>{
  const {coupon,percentage} = req.body;

  if(!coupon || !percentage){
    return res.status(400).json({message:"All fields are required"})
  }
  const oldCoupon = await Coupon.findOne({coupon});
  if(oldCoupon){
    return res.status(409).json({message:"Coupon already exists"})
  }
  try{
   const newCoupon =  new Coupon({
      coupon,
      percentage
    })

    await newCoupon.save()

    return res.status(201).json({message:"Sucesfully created"})
  }catch(err:any){
    return res.status(500).json({message:'Something went wrong'})
  }
})

router.get('/getAll',verifyTokenAndAdminAuthorization,async(req:Request,res:Response)=>{
  try{
    const coupons = await Coupon.find();
    const filteredCoupons = coupons.map((coupon:any) => {
      const { __v, ...rest } = coupon._doc;
      return rest;
    });

    return res.status(200).json(filteredCoupons)
  }catch(error){
    console.log(error);
    
    return res.status(500).json({message:"Something went wrong on server"})
  }
});

router.put('/update',verifyTokenAndAdminAuthorization,async(req:Request,res:Response)=>{
  const {percentage:newPercentage,id} = req.body;
  if(!newPercentage || !id){
    return res.status(400).json({message:"All fields are required"})
  }
  try{
      await Coupon.updateOne({_id:id},{percentage:newPercentage});
    return res.status(201).json({message:"Sucesfully updated"})
  }catch(error:any){
    return res.status(500).json({message:"Something went wrong on server"})
  }
})

router.delete('/delete/:id',verifyTokenAndAdminAuthorization,async(req:Request,res:Response)=>{
  const {id} = req.params;
  if(!id){
    return res.status(400).json({message:"All fields are required"})
  }
  try{
      await Coupon.deleteOne({_id:id});
    return res.status(200).json({message:"Sucesfully Deleted"})
  }catch(error:any){
    return res.status(500).json({message:"Something went wrong on server"})
  }
})

module.exports = router;
