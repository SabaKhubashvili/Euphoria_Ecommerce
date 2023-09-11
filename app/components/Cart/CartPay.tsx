'use client'
import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import axios from 'axios'

const paypalCreateOrder = async () => {
    try {
      let response = await axios.post('/api/paypal/createOrder', {
        user_id: 'dsadas',
        order_price: 150
      })
      console.log(response.data.data.order.id);
      
      return response.data.data.order.id
    } catch (error) {
      console.log(error);
    }
  }

  const paypalCaptureOrder = async (orderID:string) => {
    try {
      let response = await axios.post('/api/paypal/captureOrder', {
        orderID
      })
      if (response.data.success) {
        
        return true
    }
 } catch (err) {
      
      console.log(err);

      return false
    }

  }

export const CartPay = () => {
  return (
    <PayPalScriptProvider
    options={{
      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
      currency: 'USD',
      intent: 'capture'
    }}
  >
<div className='flex flex-col items-center justify-center pt-[40px]'>
  <PayPalButtons
    style={{
      color: 'gold',
      shape: 'rect',
      label: 'pay',
      height: 50,
    }}
    createOrder={async (data, actions) => {
      let order_id = await paypalCreateOrder();
      return order_id + '';
    }}
    className='flex-grow'
    onApprove={async (data, actions) => {
      let response = await paypalCaptureOrder(data.orderID);
      if (!response) {
        throw new Error('Capture order failed');
      }
    }}
  />
</div>
  </PayPalScriptProvider>
  )
}
