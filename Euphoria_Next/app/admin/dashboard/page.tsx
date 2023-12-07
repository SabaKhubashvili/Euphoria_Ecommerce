import { Dashboard } from "@/app/components/admin/dashboard/Dashboard";
import { PageTop } from "@/app/components/admin/pageTop/PageTop";
import { PublicSans } from "@/app/components/assets/Fonts";
import React from "react";

const Page = () => {





  return (
    <main className="">
        <div className={`${PublicSans.className} w-full`}>
          <PageTop pageTitle="Dashboard"/>
          
          <Dashboard/>
        </div>
    </main>
  );
};

export default Page;
