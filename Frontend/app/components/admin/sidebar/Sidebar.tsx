import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../../assets/Logo";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { PublicSans } from "../../assets/Fonts";
import { usePathname } from "next/navigation";
import { Categories } from "@/public/Svg/AdminIcons/Categories";
import { AdminDashboard } from "@/public/Svg/AdminIcons/AdminDashboard";
import { ShoppingCart } from "@/public/Svg/AdminIcons/ShoppingCart";
import { Users } from "@/public/Svg/AdminIcons/Users";
import { Coupon } from "@/public/Svg/AdminIcons/Coupon";
import { Transaction } from "@/public/Svg/AdminIcons/Transaction";
import { CirclePlus } from "@/public/Svg/AdminIcons/CirclePlus";
import { Box } from "@/public/Svg/AdminIcons/Box";
import { User } from "@/public/Svg/AdminIcons/User";
import { Settings } from "@/public/Svg/AdminIcons/Settings";
import { useMediaQuery } from "@mui/material";
import { extraLargeScreens } from "@/app/Screens/Screens";
import Link from "next/link";
import { useCouponModal } from "@/app/hooks/UseCouponModal";



export const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen:() => void;
}) => {
  const pathname = usePathname();
  const isAboveLargeScreens = useMediaQuery(extraLargeScreens);
  const {onOpen} = useCouponModal()
  
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateActiveElement = () => {
      const activeElement = document.querySelector(".SidebarActiveComponent") as HTMLDivElement;
      if (activeElement && bgRef.current) {
        bgRef.current.style.top = activeElement.offsetTop + "px";
        bgRef.current.style.height = activeElement.offsetHeight + "px";
      }
    };
    updateActiveElement();

    window.addEventListener("resize", updateActiveElement);
    return () => {
      window.removeEventListener("resize", updateActiveElement);
    };
  }, [pathname]);

  return (
    <div className="bg-white h-full">
      <div className="flex justify-between items-center pl-[18px] py-[20px] pr-[14px]">
        { (isAboveLargeScreens) && (
          <div className="w-[90px] h-[40px]">
            <Logo dark />
          </div>
        )}
        {!isAboveLargeScreens &&

          <div
          className={`cursor-pointer ${isSidebarOpen ? "" : "scale-[-1]"} ${isAboveLargeScreens ? '' : 'pr-[12px]'} `}
          onClick={setIsSidebarOpen}
          >
          <Icon svg={WebsiteIcons["AdminMenu"]} />
        </div>
        }
      </div>
      { (isSidebarOpen || isAboveLargeScreens) &&

        <h1
        className={`uppercase text-[#8B909A] text-[11px] px-[30px] py-[15px] ${PublicSans.className}`}
        >
        Main Menu
      </h1>
      }
      <div className="px-[14px] flex flex-col gap-[8px] relative">
          <div className={`w-full bg-[#F3F4F8] absolute z-[1] transition-all duration-150 rounded-[6px]`} ref={bgRef} /> {/*  Bg if active */}
        <Link className={`flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/dashboard")&& 'SidebarActiveComponent' } `} href={'/admin/dashboard'}>
          <AdminDashboard isActive={pathname.startsWith("/admin/dashboard")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/dashboard")
                  ? "text-black"
                  : " text-[#8B909A]"
                }
                >
              Dashboard
            </p>
          )}
        </Link>
        <Link className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2]  ${pathname.startsWith("/admin/orders") && 'SidebarActiveComponent' } `} href={'/admin/orders'}>
          <ShoppingCart isActive={pathname.startsWith("/admin/orders")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/orders")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Order Managment
            </p>
          )}
        </Link>
        <Link href={'/admin/customers'} className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/customers")&& 'SidebarActiveComponent' } `}>
          <Users isActive={pathname.startsWith("/admin/customers")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/customers")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Customers
            </p>
          )}
        </Link>
        <div onClick={onOpen} className={`flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/coupon") && 'SidebarActiveComponent' } `}>
          <Coupon isActive={pathname.startsWith("/admin/coupon")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/coupon")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Coupon Code
            </p>
          )}
        </div>
        <Link href={'/admin/categories'} className={`flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/categories") && 'SidebarActiveComponent' } `}>
          <Categories isActive={pathname.startsWith("/admin/categories")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/categories")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Categories
            </p>
          )}
        </Link>
        <Link href={'/admin/transactions'} className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/transactions") && 'SidebarActiveComponent' } `}>
          <Transaction isActive={pathname.startsWith("/admin/transactions")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/transactions")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Transaction
            </p>
          )}
        </Link>
      </div>
      { (isSidebarOpen || isAboveLargeScreens) &&
      <h1
        className={`uppercase text-[#8B909A] text-[11px] px-[30px] py-[15px] ${PublicSans.className}`}
      >
        Products
      </h1>
}
      <div className="px-[14px] flex flex-col gap-[8px]">
        <div className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] `}>
          <CirclePlus isActive={false} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                   "text-[#8B909A]"
              }
            >
              Add Products
            </p>
          )}
        </div>
        <div className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/productList") && 'SidebarActiveComponent' } `}>
          <Box isActive={pathname.startsWith("/admin/productList")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/productList")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Product List
            </p>
          )}
        </div>
      </div>
      { (isSidebarOpen || isAboveLargeScreens) &&
      <h1
        className={`uppercase text-[#8B909A] text-[11px] px-[30px] py-[15px] ${PublicSans.className}`}
      >
        Admin
      </h1>
}
      <div className="px-[14px] flex flex-col gap-[8px]">
        <div className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/managment") && 'SidebarActiveComponent' } `}>
          <User isActive={pathname.startsWith("/admin/managment")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/managment")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Manage Admins
            </p>
          )}
        </div>
        <div className={` flex gap-[8px] px-[16px] py-[8px] cursor-pointer relative z-[2] ${pathname.startsWith("/admin/roles") && 'SidebarActiveComponent' } `}>
          <Settings isActive={pathname.startsWith("/admin/roles")} />
          {(isAboveLargeScreens || isSidebarOpen) && (
            <p
              className={
                pathname.startsWith("/admin/roles")
                  ? "text-black text-[15px]"
                  : "text-[#8B909A] text-[15px]"
              }
            >
              Admin Roles
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
