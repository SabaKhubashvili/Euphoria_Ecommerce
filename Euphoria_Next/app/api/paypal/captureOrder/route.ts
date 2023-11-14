import connectDB from '@/app/Lib/MongoDb'
import client from '@/app/utils/paypal'
import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'



export async function POST(req:Request) {
    const{
        orderID 
    } = await req.json()


  if(!orderID)
  return NextResponse.json({success: false, message: "Please Provide order ID"},{status:400})

    
  const PaypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(orderID)
  const response = await PaypalClient.execute(request)

  if (!response) {
    return NextResponse.json({success: false, message: "Something wrong happened"},{status:500})
  }

  const mongoClient = await connectDB();
  const db = mongoClient.db("test");
  const orders = db.collection("orders");
  
   await orders.updateOne(
    { _id: orderID },
    { $set: { status: "Paid" } }
  );
  
  return NextResponse.json({success: true, message: "sucess"},{status:200})
}