"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Image from "next/image";
import { Dropdown_Down } from "@/public/Svg/Icons";
import { Roboto } from "../assets/Fonts";
import { MainButton } from "../buttons/MainButton";
import { SmallCartInfo } from "./SmallCartInfo";
import { toast } from "react-toastify";

interface Props {
  setStep: () => void;
  info: any;
}

const paypalCreateOrder = async () => {
  try {
    let response = await axios.post("/api/paypal/createOrder", {
      user_id: "dsadas",
      order_price: 150,
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
const paypalCaptureOrder = async (orderID: string) => {
  try {
    let response = await axios.post("/api/paypal/captureOrder", {
      orderID,
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

export const CartPay = ({ setStep, info }: Props) => {
  return (
    <div>
      <div className="pt-[70px] flex justify-between gap-[15px] lg:flex-row flex-col">
        <div className="flex flex-col justify-between lg:basis-3/5 ">
          <div className="flex flex-col gap-[5px]">
            <h1 className="text-[24px]">Shipping info</h1>
            <ul className="pt-[7px] flex flex-col gap-[6px]">
              <li className="text-gray text-[16px]">
                <span className="text-black">Email:</span> {info.email}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">Firstname:</span> {info.firstName}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">StreetAdress:</span>{" "}
                {info.streetAdress}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">city:</span> {info.city}
              </li>
              <li className="text-gray text-[16px]">
                <span className="text-black">Zip:</span> {info.zip}
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
                  } else {
                    throw new Error("Capture order failed");
                  }
                }}
              />
            </div>
          </PayPalScriptProvider>
        </div>
        <SmallCartInfo />
      </div>
    </div>
  );
};
