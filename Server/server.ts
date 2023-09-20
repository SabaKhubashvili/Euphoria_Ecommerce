const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')

const userRoute = require('./routes/users')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/products')
const cartRouter = require('./routes/cart')
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(()=>{console.log('sucesfully conected')})

app.use(cors());
app.use(express.json());

app.use('/api/user',userRoute)
app.use('/api/auth',authRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.listen(process.env.PORT || 5000,()=>{
  console.log('beckend is running');
})

