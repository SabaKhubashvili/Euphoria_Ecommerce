import mongoose from 'mongoose'
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const serverless =  require('serverless-http');

const authRouter = require('./routes/auth.ts');
const categoryRouter = require('./routes/categories.ts');
const productRouter = require('./routes/products.ts');
const cartRouter = require('./routes/cart.ts');
const couponRouter = require('./routes/coupon.ts');
const orderRouter = require('./routes/order.ts');
const userRouter = require('./routes/users.ts');
const cors = require("cors");;

dotenv.config();

mongoose.connect(process.env.DATABASE_URL || '')
   .then(() => console.log('Successfully connected'))
   .catch((err:any) => {
      console.error('Connection error', err);
      process.exit(1);
   });


app.use(cors());
app.use(express.json());

app.use('/.netlify/functions/api/auth',authRouter)
app.use('/.netlify/functions/api/product',productRouter)
app.use('/.netlify/functions/api/cart',cartRouter)
app.use('/.netlify/functions/api/categories',categoryRouter)
app.use('/.netlify/functions/api/coupon',couponRouter)
app.use('/.netlify/functions/api/order',orderRouter);
app.use('/.netlify/functions/api/user',userRouter);

// app.listen(process.env.PORT || 5000,()=>{
//   console.log('beckend is running');
// })

module.exports.handler = serverless(app);