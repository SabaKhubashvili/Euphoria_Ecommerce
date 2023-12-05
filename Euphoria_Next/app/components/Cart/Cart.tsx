"use client";

import React, { useMemo, useState } from "react";
import { SearchInput } from "../Inputs/SearchInput";
import { GrayButton } from "../buttons/GrayButton";
import { MainButton } from "../buttons/MainButton";
import { Steps } from "./CartPage";
import { CartInterface, CartRowInterface } from "@/app/types";
import { CartTableRow } from "./CartTableRow";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

export const Cart = ({
  setStep,
  totalPrice,
  setTotalPrice,
  coupon,
  setCoupon,
  data
}: {
  setStep: (value: Steps) => void;
  totalPrice: number;
  setTotalPrice: (value: number) => void;
  coupon: {
    code: string;
    percentage: number;
    isDisabled: boolean;
    success: boolean;
  };
  setCoupon: (prev: any) => void;
  data:CartInterface
}) => {

  const [cartData, setCartData] = useState<CartInterface>(data);
  const [isSending, setIsSending] = useState(false);

  const filterCartData = (id: string) => {
    setCartData((prev: CartInterface) => {
      return {
        ...prev,
        products: prev.products.filter((product) => product._id !== id),
      };
    });
  };

  const checkCoupon = async () => {
    if (isSending) return null;
    setIsSending(true);
    await RestClient.postRequest(
      BaseUrl.checkCoupon,
      { code: coupon.code },
      getCookie("accessToken")
    )
      .then((res) => {
        if (res.data.success) {
          setCoupon((prev: any) => ({
            ...prev,
            percentage: res.data.coupon.percentage,
            isDisabled: true,
            success: true,
          }));
        } else {
          toast.error(res.data.message, {
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
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const clearCart = async () => {
    if (isSending || cartData.products?.length <= 0) return null;
    setIsSending(true);
    await RestClient.deleteRequest(BaseUrl.clearCart, getCookie("accessToken"))
      .then((res) => {
        setCartData((prev) => ({
          ...prev,
          products: [],
        }));
        setTotalPrice(0)
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="grid grid-cols-3 gap-[20px] mb-[40px]">
      <div className="xl:col-span-2 col-span-3   max-h-[750px] overflow-y-auto overflow-x-auto">
        <div className="w-full  p-6 select-none min-w-[860px]">
          <div className="w-full pb-[10px] ">
            <div className="w-full border-b-[1px] border-b-divider border-solid pb-[10px] flex items-cente justify-between">
              <h1 className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-start basis-1/6 ">
                PRODUCT
              </h1>
              <h1 className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center basis-1/6">
                Price
              </h1>
              <h1 className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center basis-1/6">
                Size
              </h1>
              <h1 className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center basis-1/6">
                Quantity
              </h1>
              <h1 className="uppercase text-gray font-medium tracking-[0.5px] text-[18px] text-center basis-1/6">
                Total
              </h1>
              <h1 className="basis-1/6"></h1>
            </div>
          </div>
          <div className="border-b-[1px]  border-b-divider border-solid">
            {cartData?.products.length > 0 ? (
              cartData.products.map((product: CartRowInterface) => (
                <CartTableRow
                  filterCart={filterCartData}
                  totalPriceOnChange={(num: number) => setTotalPrice(num)}
                  key={product._id}
                  {...product}
                />
              ))
            ) : (
              <div className="py-[50px] flex justify-center items-center flex-col">
                <div className="w-[200px] h-[100px]">
                  <Icon svg={WebsiteIcons["disabledCart"]} className="" />
                </div>
                <h1 className="text-[25px] text-secondaryGray">
                  There is nothing in cart
                </h1>
              </div>
            )}
          </div>
        </div>
        {data.products.length > 0 &&

          <div className="flex justify-end items-center">
          <GrayButton onClick={clearCart} label="Clear cart" small />
        </div>
        }
      </div>
      <div className="xl:col-span-1 col-span-3 flex flex-col gap-[24px]">
        <div className="w-full border-[2px] border-solid border-divider bg-lightBlue pt-[36px] pb-[21px] lg:px-[32px] sm:px-[25px] px-[10px] ">
          <div>
            <h1 className="lg:text-[24px] text-[18px]  leading-[68px]">
              Apply Discount Code
            </h1>
            <div>
              <div className="flex sm:flex-row flex-col">
                <SearchInput
                  placeholder="Enter discount code"
                  value={coupon.code}
                  disabled={coupon.isDisabled}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCoupon((prev: any) => ({
                      ...prev,
                      code: e.target.value,
                    }))
                  }
                />
                <div className="sm:w-1/3 w-full">
                  <GrayButton
                    onClick={checkCoupon}
                    label="Apply Discount"
                    small
                    full
                    disabled={coupon.isDisabled}
                  />
                </div>
              </div>
              {coupon.success && (
                <div className="text-green pt-[10px]">
                  Coupon applied successfully! You've saved {coupon.percentage}%
                  on your purchase.
                </div>
              )}
            </div>
          </div>
          {/* <div className="flex flex-col gap-[15px] pt-[20px]">
            <div className="flex flex-col gap-[8px]">
              <h1 className=" xl:text-[24px] lg:text-[19px] leading-[28px]">
                Estimate Shipping and Tax
              </h1>
              <p className=" text-gray xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] ">
                Enter your destination to get a shipping estimate.
              </p>
            </div>
            <div className="flex flex-col gap-[26px] pt-[10px]">
              {/* <div className="flex xl:flex-row flex-col xl:items-center full gap-[10px]">
                <h2 className="flex basis-1/3">
                  Country <span className="text-rose-700">*</span>
                </h2>
                <MainDropdown
                  full
                  label={
                    info.country.lengh1 > 0 ? info.country : "Choose country"
                  }
                  content={[
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            country: value,
                          });
                      },
                      label: "Georgia",
                    },
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            country: value,
                          });
                      },
                      label: "Usa",
                    },
                  ]}
                />
              </div>
              <div className="flex full gap-[10px] xl:flex-row flex-col xl:items-center">
                <h2 className="flex basis-1/3">
                  State/Province <span className="text-rose-700">*</span>
                </h2>
                <MainDropdown
                  full
                  label={info.state.lengh1 > 0 ? info.state : "Choose City"}
                  content={[
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            state: value,
                          });
                      },
                      label: "Tbilisi",
                    },
                    {
                      onClick: (value) => {
                        value &&
                          setInfo({
                            state: value,
                          });
                      },
                      label: "Batumi",
                    },
                  ]}
                />
              </div> 
              <div className="flex full gap-[10px] xl:flex-row flex-col xl:items-center">
                <h2 className="flex basis-2/5">
                  Zip/Postal Code <span className="text-rose-700">*</span>
                </h2>
                <SearchInput
                  id="zip"
                  name="zip"
                  placeholder=""
                  onChange={zipOnchange}
                />
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="border-[2px] border-solid border-divider bg-lightBlue 
        "
        >
          <div className=" flex flex-col gap-[10px] pt-[36px] pb-[21px] lg:px-[32px] sm:px-[25px] px-[10px] ">
            <div className="flex justify-between xl:text-[24px] lg:text-[19px] md:text-[17px] text-[15px] ">
              <p>Subtotal</p>
              <p>{totalPrice} GEL</p>
            </div>
            <div className="flex justify-between font-medium xl:text-[24px] lg:text-[19px] md:text-[17px] text-[15px] text-gray">
              <p>Coupon</p>
              <p>
                {coupon.success ? (totalPrice * coupon.percentage) / 100 : 0}{" "}
                GEL
              </p>
            </div>
            <div className="flex justify-between xl:text-[24px] lg:text-[19px] md:text-[17px] text-[15px] pt-[10px]">
              <p>Order total</p>
              <p>
                {coupon.success
                  ? totalPrice - (totalPrice * coupon.percentage) / 100
                  : totalPrice}{" "}
                GEL
              </p>
            </div>
          </div>
          <div className="border-t-[1px]   mt-[18px] h-[60px]">
            <MainButton
              label="proceed to checkout"
              full
              onClick={(e) => setStep(Steps.Shipping)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
