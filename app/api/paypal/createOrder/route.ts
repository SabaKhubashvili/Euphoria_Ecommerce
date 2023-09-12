
import client from '@/app/utils/paypal';
import paypal from '@paypal/checkout-server-sdk';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  try {
    const { order_price, user_id } = await req.json();

    if (!order_price || !user_id) {
      return NextResponse.json({ success: false, message: "Please provide order_price and User ID" }, { status: 400 });
    }

    const PaypalClient = client();
    const request = new paypal.orders.OrdersCreateRequest();
    request.headers['Prefer'] = 'return=representation';
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'GEL',
            value: order_price + "",
          },
        },
      ],
    });

    const response = await PaypalClient.execute(request);

    if (response.statusCode !== 201) {
      return NextResponse.json({ success: false, message: "Some error occurred at the backend" }, { status: 500 });
    }

    const order = {};

    return NextResponse.json({ success: true, data: { order:{
      id: response.result.id
    } } }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Could not find the user" }, { status: 500 });
  }
}
