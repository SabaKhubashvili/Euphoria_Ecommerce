'use client'

import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
import { AdminPageContainer } from "./components/admin/container/adminPageContainer";
import { Oswald } from "./components/assets/Fonts";
import { CartInterface } from "./types";
import { useCartStore } from "./hooks/useCartData";

const AppLayout = ({ children,cartData }: { children: React.ReactNode,cartData:CartInterface  | null}) => {
  const pathname = usePathname();
  const { setCartData } = useCartStore();
  React.useEffect(()=>{
    if(cartData){
      setCartData({...cartData})
    }
  },[cartData,setCartData])
  
  return (
    <React.Fragment>
      {pathname.startsWith('/admin') ? (
        <AdminPageContainer>{children}</AdminPageContainer>
      ) : (
        <div className={Oswald.className}>
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

export default AppLayout;
