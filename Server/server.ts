const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')


const authRouter = require('./routes/auth.routes.ts')
const categoryRouter = require('./routes/categories.ts')
const productRouter = require('./routes/products.ts')
const cartRouter = require('./routes/cart.ts')
const couponRouter = require('./routes/coupon.ts')
const orderRouter = require('./routes/order.ts')
const userRouter = require('./routes/users.ts')
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(()=>{console.log('sucesfully conected')})

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/categories',categoryRouter)
app.use('/api/coupon',couponRouter)
app.use('/api/order',orderRouter);
app.use('/api/user',userRouter);

app.listen(process.env.PORT || 5000,()=>{
  console.log('beckend is running');
})

