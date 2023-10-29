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
    return NextResponse.json({success: false, message: "Some Error Occured at backend"},{status:500})
  }
  
  
  // Your Custom Code to Update Order Status
  // And Other stuff that is related to that order, like wallet
  // Here I am updateing the wallet and sending it back to frontend to update it on frontend
  const wallet = {}
  return NextResponse.json({success: true, message: "sucess"},{status:200})
}