const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')


const authRouter = require('../routes/auth')
const categoryRouter = require('../routes/categories')
const productRouter = require('../routes/products')
const cartRouter = require('../routes/cart')
const couponRouter = require('../routes/coupon')
const orderRouter = require('../routes/order')
const userRouter = require('../routes/users')
const cors = require("cors");

const serverless = require('serverless-http')

dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(()=>{console.log('sucesfully conected')})


app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/api/auth',authRouter)
app.use('/.netlify/functions/api/product',productRouter)
app.use('/.netlify/functions/api/cart',cartRouter)
app.use('/.netlify/functions/api/categories',categoryRouter)
app.use('/.netlify/functions/api/coupon',couponRouter)
app.use('/.netlify/functions/api/order',orderRouter);
app.use('/.netlify/functions/api/user',userRouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log('beckend is running');
  })

module.exports.handler = serverless(app)