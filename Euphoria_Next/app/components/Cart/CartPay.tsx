"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { SmallCartInfo } from "./SmallCartInfo";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { getCookie } from "cookies-next";
import { useCartStore } from "@/app/hooks/useCartData";
import { CartRowInterface, } from "@/app/types";

interface Props {
  setStep: () => void;
  paymentAmount: number;
  adressInfo:any,
  couponDiscount:number,
  data: CartRowInterface[]
}


export const CartPay = ({ setStep,  paymentAmount,adressInfo,couponDiscount, data }: Props) => {
  const jwt:any = jwtDecode(getCookie('accessToken') || '');

  
    
  const paypalCreateOrder = async () => {
    try {
      let response = await axios.post("/api/paypal/createOrder", {
        user_id: jwt.id,
        order_price: paymentAmount,
        products: data.map((row:any) => ({  
          product: row.product._id,    
          quantity: row.quantity, 
          size: row.size
        })),
        adressInfo,
        couponDiscount:couponDiscount
      });
      return response.data.data.order.id;
    } catch (error:any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  
  const paypalCaptureOrder = async (orderID:string) => {

    try {
      let response = await axios.post("/api/paypal/captureOrder", {
        orderID,
        adressInfo,
        order_price:paymentAmount
      });
      if (response.data.success) {
        return true;
      }
    } catch (err:any) {
     toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return false;
    }
  };
  return (
    <div>
      <div className="pt-[70px] flex justify-between gap-[15px] lg:flex-row flex-col">
        <div className="flex flex-col justify-between lg:basis-3/5 ">
          <div className="flex flex-col gap-[5px]">
            <h1 className="text-[24px]">Shipping info</h1>
            <ul className="pt-[7px] flex flex-col gap-[6px]">
              <li className="text-gray text-[16px]">
                <span className="text-black">Firstname:</span> {adressInfo.firstname}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">Email: </span> {adressInfo.email}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">Phone: </span> {adressInfo.phone}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">StreetAdress: </span>
                {adressInfo.streetAdress}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">city: </span> {adressInfo.city}
              </li>
            </ul>
          </div>
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
              currency: "USD",
              intent: "capture",
            }}
          >
            <div className="flex flex-col items-center justify-center pt-[40px]">
              <PayPalButtons
                style={{
                  color: "gold",
                  shape: "rect",
                  label: "pay",
                  height: 40,
                }}
                className="w-full"
                createOrder={async (data, actions) => {
                  let order_id = await paypalCreateOrder();
                  return order_id + "";
                }}
                onApprove={async (data, actions) => {                  
                  let response = await paypalCaptureOrder(data.orderID);
                  if (response) {
                    setStep();
                  }
                }}
              />
            </div>
          </PayPalScriptProvider>
        </div>
        <SmallCartInfo totalPrice={paymentAmount} data={data} />
      </div>
    </div>
  );
};
