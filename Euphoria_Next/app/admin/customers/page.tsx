import React from "react";
import { cookies } from "next/headers";

import { CustomersTable } from "@/app/components/admin/customers/CustomersTable";
import { PageTop } from "@/app/components/admin/pageTop/PageTop";
import { PublicSans } from "@/app/components/assets/Fonts";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { ManageUserModal } from "@/app/components/admin/modals/ManageUserModal";

const page = async() => {  
  const {data:customers} = await RestClient.GetRequest(BaseUrl.getCustomers,cookies().get('accessToken')?.value) 

  return (
    <main className={PublicSans.className}>
      <ManageUserModal/>
      <PageTop pageTitle="Customers" />
      <CustomersTable data={customers}/>
    </main>
  );
};

export default page;
