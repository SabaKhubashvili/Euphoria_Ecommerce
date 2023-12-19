"use client";

//* ----------------------------> React
import React, { useEffect, useRef, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";

//* ----------------------------> Components
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Icon } from "../../Icon";
import { MainDropdown } from "../../Dropdown/MainDropdown";
import { MainTable } from "../../tables/MainTable";
import { Pagination } from "../../Pagination";

//* ----------------------------> Functions && Hooks
import { useAdminOrdersPagination } from "@/app/hooks/UseAdminOrdersPagination";
import { ordersInterface } from "@/app/types";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { WebsiteIcons } from "@/public/Svg/IconsObject";

enum Variations {
  All = 0,
  Paid = 1,
  Pending = 2,
  Delivered = 3,
}

export const OrderManagmentVariations = ({
  orders,
}: {
  orders: ordersInterface[];
}) => {
  //* ----------------------------------------------------> Variables <----------------------------------------------------------------

  // ----------------------------------------------------> States <----------------------------------------------------------------
  const [activeVariation, setActiveVariation] = useState<Variations>(Variations.All );
  const [orderId, setOrderId] = useState<string>("");
  const underlineRef = useRef<HTMLDivElement>(null);
  const [filteredOrders, setFilteredOrders] = useState<any>();
  const [isLoading,setIsLoading] = useState(false)
  const [ordersForTable,setOrdersForTable] = useState(
    orders.map((order) => {
      const { adressInfo, products, ...returning } = order;

      return {
        _id: returning._id,
        user_id: returning.userId,
        phone: adressInfo.phone,
        email: adressInfo.email,
        status: returning.status,
        products: products,
        pricing:{
          totalPrice:returning.price,
          couponDiscount:returning.couponDiscount
        },
        adressInfo,
      };
    })
  );
  // ----------------------------------------------------> Hooks <----------------------------------------------------------------
  const {
    nextPage,
    prevPage,
    manualPage,
    currentPage,
    ordersPerPage,
    setOrdersPerPage,
  } = useAdminOrdersPagination();
  //* ----------------------------------------------------> UseEffects <----------------------------------------------------------------

  useEffect(() => {
    const updateActiveElement = () => {
      const activeElement = document.querySelector(
        ".activeTableVariationOrders"
      ) as HTMLDivElement;
      if (activeElement && underlineRef.current) {
        underlineRef.current.style.left = activeElement.offsetLeft + "px";
        underlineRef.current.style.width = activeElement.offsetWidth + "px";
      }
    };
    updateActiveElement();

    window.addEventListener("resize", updateActiveElement);
    return () => {
      window.removeEventListener("resize", updateActiveElement);
    };
  }, [activeVariation]);

  //* ----------------------------------------------------> Data <----------------------------------------------------------------

  const ordersOnPage: any = useMemo(() => {
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = currentPage * ordersPerPage;
    let returningOrders = ordersForTable.slice(startIndex, endIndex);
    if (activeVariation === Variations.Delivered) {
      returningOrders = returningOrders.filter(
        (order) => order.status === "Delivered"
      );
    } else if (activeVariation === Variations.Pending) {
      returningOrders = returningOrders.filter(
        (order) => order.status === "Pending"
      );
    } else if (activeVariation === Variations.Paid) {
      returningOrders = returningOrders.filter(
        (order) => order.status === "Paid"
      );
    }
    return returningOrders;
  }, [currentPage, ordersPerPage, activeVariation,ordersForTable]);

  const ordersLength = useMemo(() => {
    if (activeVariation === Variations.Delivered) {
      return orders.filter((order) => order.status === "Delivered").length;
    } else if (activeVariation === Variations.Pending) {
      return orders.filter((order) => order.status === "Pending").length;
    } else if (activeVariation === Variations.Paid) {
      return orders.filter((order) => order.status === "Paid").length;
    } else {
      return orders.length;
    }
  }, [activeVariation,orders]);

  //* ----------------------------------------------------> Functions <----------------------------------------------------------------

  const searchForOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveVariation(Variations.All);
    const filtered = ordersForTable.filter((order) =>
      order._id.toString().includes(orderId)
    );

    if (filtered.length <= 0) {
      toast.error("No order was found", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setFilteredOrders(filtered);
    }
  };

  const updateStatus = (id: string,status:"Pending" | "Delivered" | "Paid") => {
    if(!isLoading){
      setIsLoading(true)
      RestClient.postRequest(BaseUrl.updateOrderStatus,{id,status},getCookie('accessToken'))
      .then(res=>{
        setOrdersForTable(prevOrders => {
          return prevOrders.map(order => {
            if (order._id === id) {
              return { ...order, status: status };
            }
            return order;
          });
        });
      }).catch(err=>{
        // console.log('Something went wrong');
        return null;
      }).finally(()=>{
        setIsLoading(false)
      })
    }
  };

  //* ----------------------------------------------------> JSX.ELements <----------------------------------------------------------------
  const Filter = () => {
    return (
      <div className="flex items-center border-b-[1px] border-b-[#DBDADE] relative select-none">
        <div
          className="h-[2px] bg-purple absolute bottom-0 transition-all duration-200"
          ref={underlineRef}
        />
        {/* Underline */}
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.All
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            // setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.All);
          }}
        >
          All
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Paid
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            // setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.Paid);
          }}
        >
          Paid
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Pending
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            // setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.Pending);
          }}
        >
          Pending
        </div>
        <div
          className={`py-[8px] px-[20px] text-[15px] leading-[22px] cursor-pointer ${
            activeVariation === Variations.Delivered
              ? "text-purple activeTableVariationOrders"
              : "text-secondaryGray"
          }`}
          onClick={() => {
            setFilteredOrders(undefined);
            // setOrderId("");
            manualPage(1);
            setActiveVariation(Variations.Delivered);
          }}
        >
          Delivered
        </div>
      </div>
    );
  };

  const rowActions = (actions?: any) => {
    return (
      <div
        style={{
          flexBasis: 100 / (Object.keys(ordersOnPage[0]).length + 1) + "%",
        }}
        className="select-none cursor-pointer"
        onClick={() => actions.onClick()}
      >
        <Icon
          svg={WebsiteIcons["adminTableArrow_down"]}
          className="flex justify-end items-center"
        />
      </div>
    );
  };
  const customDropdownBody = (order: ordersInterface & {
    pricing:{
      totalPrice:number,
      couponDiscount:number
    }
  }) => {    
    const forTable = order.products.map((ord: any) => {      
      const {
        aboutProduct,
        advantages,
        brand,
        category,
        description,
        images,
        availableSizes,
        __v,
        ...productForTable
      } = ord.product;
      const{
        quantity,
        ...rest
      } = ord;
      const returnable = {
        ...productForTable,
        quantity
      }
      return {
        ...returnable,
        discount:
          productForTable.discount === null ? 0 :  productForTable.discount,
      };
    });

    
    const bodyRow  = (givenProduct:{
      _id:string,
      title:string,
      quantity:number,
      price:string,
      discount:string,
    }) =>{        

      return(
        <div className="flex items-center py-[10px]">
          <div
          style={{ flexBasis: 100 / Object.keys(givenProduct).length + "%" }}
          >
            #{givenProduct._id.slice(0,15)}...
          </div>
          <div
          className="font-bold"
          style={{ flexBasis: 100 / Object.keys(givenProduct).length + "%" }}
          >
            {givenProduct.title}
          </div>
          <div
          style={{ flexBasis: 100 / Object.keys(givenProduct).length + "%" }}
          >
            X{givenProduct.quantity}
          </div>
          <div
          style={{ flexBasis: 100 / Object.keys(givenProduct).length + "%" }}
          >
            ₾{givenProduct.price}
          </div>
          <div
          style={{ flexBasis: 100 / Object.keys(givenProduct).length + "%" }}
          className="text-[#EA5455]"
          >
            {givenProduct.discount}%
          </div>
          <div
          style={{ flexBasis: 100 / Object.keys(givenProduct).length + "%" }}
          className=""
          >
            ₾{JSON.parse(givenProduct.discount) > 0 ?
                 Math.floor(givenProduct.quantity * (JSON.parse(givenProduct.price) - (JSON.parse(givenProduct.price) * JSON.parse(givenProduct.discount)) / 100))
            :
             JSON.parse(givenProduct.price) * givenProduct.quantity}
          </div>
        </div>
      )
    }
    
    return (
      <div className="w-full ">
        <div className="flex flex-col gap-[20px]">
          <MainTable
            bodyContent={forTable}
            topContent={["ID", "Title","QTY", "Price", "Disc.","Total"]}
            type="secondary"
            notFoundMessage="No order was found"
            customBodyRow={bodyRow}
          />
          <div className="flex justify-between xl:p-[24px] p-[12px] pr-[20px] xl:flex-row flex-col gap-y-10">
            <div className="flex flex-col gap-[16px] xl:w-[50%] w-full">
              <h1 className="uppercase text-[13px] font-medium text-secondaryGray">Personal Information</h1>
              <div className="flex flex-col gap-[10px]">
                <div className="flex xl:jsutify-normal justify-start gap-[15px]">
                  <h3 className="xl:basis-1/3 text-start">Fistname: </h3>
                  <h3 className="font-semibold xl:basis-1/2">{order.adressInfo.firstname}</h3>
                </div>
                <div className="flex xl:jsutify-normal justify-start gap-[15px]">
                  <h3 className="xl:basis-1/3 text-start">Lastname: </h3>
                  <h3 className="font-semibold xl:basis-1/2">{order.adressInfo.lastname}</h3>
                </div>
                <div className="flex xl:jsutify-normal justify-start gap-[15px]">
                  <h3 className="xl:basis-1/3 text-start">Contact Number: </h3>
                  <h3 className="font-semibold xl:basis-1/2">{order.adressInfo.phone}</h3>
                </div>
                <div className="flex xl:jsutify-normal justify-start gap-[15px]">
                  <h3 className="xl:basis-1/3 text-start">Email: </h3>
                  <h3 className="font-semibold xl:basis-1/2">{order.adressInfo.email}</h3>
                </div>
                <div className="flex xl:jsutify-normal justify-start gap-[15px]">
                  <h3 className="xl:basis-1/3 text-start">City: </h3>
                  <h3 className="font-semibold xl:basis-1/2">{order.adressInfo.city}</h3>
                </div>
                <div className="flex xl:jsutify-normal justify-start gap-[15px]">
                  <h3 className="xl:basis-1/3 text-start">Adress: </h3>
                  <h3 className="font-semibold xl:basis-1/2">{order.adressInfo.streetAdress}</h3>
                </div>
                <div className="flex xl:jsutify-normal flex-col justify-start gap-[8px] pt-[25px]">
                  <h3 className="xl:basis-1/3 text-start">Additional information: </h3>
                  <h3 className="font-medium  xl:basis-1/2">{order.adressInfo.additionalInformation ||  ""}</h3>
                </div>
              </div>
            </div>
              <div className="flex flex-col gap-[16px] w-[500px] ">
                <div className="flex justify-between w-full">
                  <h1 className="text-secondaryGray">Subtotal</h1>
                  <h1 className="text-[15px] text-blackBlue">₾{order.pricing.totalPrice + order.pricing.couponDiscount - 10}</h1>
                </div>
                <div className="flex justify-between w-full">
                  <h1 className="text-secondaryGray">Shipping</h1>
                  <h1 className="text-[15px] text-blackBlue">₾10</h1>
                </div>
                <div className="flex justify-between w-full">
                  <h1 className="text-secondaryGray">Discount</h1>
                  <h1 className="text-[15px] text-[#EA5455]"  
                  >₾{order.pricing.couponDiscount}</h1>
                </div>
                <div className="flex justify-between w-full">
                  <h1 className="text-secondaryGray">Total</h1>
                  <h1 className="text-[15px] text-blackBlue">₾{order.pricing.totalPrice}</h1>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Filter />
      <div className=" pt-[24px] flex justify-between items-center">
        <div className="flex gap-[10px] items-center">
          <div className="w-[204px]">
            <SecondaryInput
              placeholder="Search by order id"
              type="secondary"
              rightSvg={
                <Icon
                  svg={WebsiteIcons["Search"]}
                  className="flex items-center"
                />
              }
              onChange={(e) => setOrderId(e.target.value)}
              value={orderId}
              onSubmit={searchForOrder}
            />
          </div>
          <div
            className="cursor-pointer bg-purple text-white px-[10px] py-[8px] rounded-[6px]"
            onClick={() => setFilteredOrders(undefined)}
          >
            Reset
          </div>
        </div>
        {/* <MainDropdown
          content={[
            { label: "16", onClick: () => console.log("smt") },
            { label: "32", onClick: () => console.log("smt") },
            { label: "48", onClick: () => console.log("smt") },
            { label: "64", onClick: () => console.log("smt") },
          ]}
          type="secondary"
          size="xs"
          label="Filter by date range"
        /> */}
      </div>
      <div className="bg-white">
        <div className="h-[600px] mt-[16px]">
          <MainTable
            bodyContent={filteredOrders || ordersOnPage || []}
            topContent={["ID", "User id", "Phone", "Email", "Status",""]}
            type="primary"
            notFoundMessage="No order was found"
            actions={(id?: string, actions?: any) => rowActions(actions)}
            customDropdownBody={(bodyContent)=>customDropdownBody(bodyContent as unknown as ordersInterface & {
              pricing:{
                totalPrice:number,
                couponDiscount:number
              }
            })}
            updateStatus={updateStatus}
          />
        </div>
        <div className="w-full flex justify-between items-center px-[24px]">
          <div className="flex items-center gap-[10px] text-secondaryGray">
            <span>Showing</span>
            <MainDropdown
              type="primary"
              size="xs"
              label={`${ordersPerPage}`}
              content={[
                { label: "10", onClick: () => setOrdersPerPage(10) },
                { label: "20", onClick: () => setOrdersPerPage(20) },
                { label: "30", onClick: () => setOrdersPerPage(30) },
                { label: "40", onClick: () => setOrdersPerPage(40) },
                { label: "50", onClick: () => setOrdersPerPage(50) },
              ]}
            />
            <span>of 50</span>
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              nextPage={nextPage}
              productPerPage={ordersPerPage}
              manualPage={manualPage}
              previousPage={prevPage}
              productsLength={filteredOrders?.length || ordersLength}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
