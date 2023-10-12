import { CustomersTable } from "@/app/components/admin/customers/CustomersTable";
import { PageTop } from "@/app/components/admin/pageTop/PageTop";
import { PublicSans } from "@/app/components/assets/Fonts";
import React from "react";

const page = () => {

  

  return (
    <main className={PublicSans.className}>
      <PageTop pageTitle="Customers" />
      <CustomersTable/>
    </main>
  );
};

export default page;
