'use client'
import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { usePathname } from "next/navigation";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      {!pathname.startsWith("/admin") && <Navbar />}
      {children}
      {!pathname.startsWith("/admin") && <Footer />}
    </React.Fragment>
  );
};

export default AppLayout;
