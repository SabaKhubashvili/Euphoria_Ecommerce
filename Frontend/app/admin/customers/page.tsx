import { Icon } from "@/app/components/Icon";
import { PageTop } from "@/app/components/admin/pageTop/PageTop";
import { MainTable } from "@/app/components/tables/MainTable";
import { customers } from "@/app/constants";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import React from "react";

const page = () => {
  const actions = (
    <div
      style={{
        flexBasis: 100 / (Object.keys(customers[0]).length + 1) + "%",
      }}
      className="flex justify-start"
    >
      <Icon svg={WebsiteIcons['edit']} />
      <Icon svg={WebsiteIcons['delete']} />
    </div>
  );
  return (
    <main>
      <PageTop pageTitle="Customers" />
      <div className="h-[700px]">
        <MainTable
          bodyContent={customers}
          topContent={["Name", "Email", "Phone Number", "Created", "Action"]}
          type="primary"
          notFoundMessage="No order was found"
          actions={actions}
        />
      </div>
    </main>
  );
};

export default page;
