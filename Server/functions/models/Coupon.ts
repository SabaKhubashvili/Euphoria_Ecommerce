const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    coupon: {type:String,required:true, unique:true},
    percentage: {type:Number, required:true},
})

module.exports = mongoose.model("Coupon",CouponSchema)