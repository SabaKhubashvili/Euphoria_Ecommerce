'use client'

import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { usePathname } from "next/navigation";
import { PageContainer } from "./components/admin/container/PageContainer";
import { Oswald } from "./components/assets/Fonts";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <React.Fragment>
      {pathname.startsWith('/admin') ? (
        <PageContainer>{children}</PageContainer>
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
