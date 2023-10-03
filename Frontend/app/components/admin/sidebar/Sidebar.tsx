import Image from "next/image";
import React from "react";
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

export const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <div className=" h-full w-full bg-white">
      <div className="flex justify-between items-center pl-[18px] py-[20px] pr-[14px]">
        <div className="w-[90px] h-[40px]">
          <Logo dark />
        </div>
        <div
          className={`cursor-pointer ${isSidebarOpen ? "" : "scale-[-1]"} `}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Icon svg={WebsiteIcons["AdminMenu"]} />
        </div>
      </div>
      <h1
        className={`uppercase text-[#8B909A] text-[11px] px-[30px] py-[15px] ${PublicSans.className}`}
      >
        Main Menu
      </h1>
      <div className="px-[14px] flex flex-col gap-[8px]">
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <AdminDashboard isActive={pathname.startsWith("/admin/dashboard")} />
          <p
            className={
              pathname.startsWith("/admin/dashboard")
                ? "text-black"
                : " text-[#8B909A]"
            }
          >
            Dashboard
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <ShoppingCart isActive={pathname.startsWith("/admin/orders")} />
          <p
            className={
              pathname.startsWith("/admin/orders")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Order Managment
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <Users isActive={pathname.startsWith("/admin/customers")} />
          <p
            className={
              pathname.startsWith("/admin/customers")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Customers
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <Coupon isActive={pathname.startsWith("/admin/coupon")} />
          <p
            className={
              pathname.startsWith("/admin/coupon")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Coupon Code
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <Categories isActive={pathname.startsWith("/admin/categories")} />
          <p
            className={
              pathname.startsWith("/admin/categories")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Categories
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <Transaction isActive={pathname.startsWith("/admin/transactions")} />
          <p
            className={
              pathname.startsWith("/admin/transactions")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Transaction
          </p>
        </div>
      </div>
        <h1
          className={`uppercase text-[#8B909A] text-[11px] px-[30px] py-[15px] ${PublicSans.className}`}
        >
          Products
        </h1>
      <div className="px-[14px] flex flex-col gap-[8px]">
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <CirclePlus isActive={pathname.startsWith("/admin/product/add")} />
          <p
            className={
              pathname.startsWith("/admin/product/add")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Add Products
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <Box isActive={pathname.startsWith("/admin/product/add")} />
          <p
            className={
              pathname.startsWith("/admin/product/add")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Product List
          </p>
        </div>
      </div>
        <h1
          className={`uppercase text-[#8B909A] text-[11px] px-[30px] py-[15px] ${PublicSans.className}`}
        >
          Admin
        </h1>
      <div className="px-[14px] flex flex-col gap-[8px]">
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <User isActive={pathname.startsWith("/admin/managment")} />
          <p
            className={
              pathname.startsWith("/admin/managment")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Manage Admins
          </p>
        </div>
        <div className="flex gap-[8px] px-[16px] py-[8px] cursor-pointer">
          <Settings isActive={pathname.startsWith("/admin/roles")} />
          <p
            className={
              pathname.startsWith("/admin/roles")
                ? "text-black"
                : "text-[#8B909A]"
            }
          >
            Admin Roles
          </p>
        </div>
      </div>
    </div>
  );
};
