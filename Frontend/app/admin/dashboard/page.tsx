import { BarChart } from "@/app/components/Charts/BarChart";
import { MultiAxisChart } from "@/app/components/Charts/MultiAxisChart";
import { Icon } from "@/app/components/Icon";
import { PageContainer } from "@/app/components/admin/container/PageContainer";
import { PublicSans } from "@/app/components/assets/Fonts";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import Image from "next/image";
import React from "react";

const Page = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = [
    {
      name: "Page A",
      sales: 200,
      cost: 400,
    },
    {
      name: "Page B",
      sales: 500,
      cost: 200,
    },
    {
      name: "Page C",
      sales: 100,
      cost: 500,
    },
    {
      name: "Page D",
      sales: 600,
      cost: 100,
    },
    {
      name: "Page E",
      sales: 900,
      cost: 600,
    },
    {
      name: "Page F",
      sales: 500,
      cost: 900,
    },
    {
      name: "Page G",
      sales: 550,
      cost: 500,
    },
  ];

  return (
    <main className="bg-[#FAFAFA]">
      <PageContainer>
        <div className={`pt-[20px] ${PublicSans.className} w-full`}>
          <div className="flex justify-between">
            <h1 className="font-bold text-[24px] leading-[22px] flex-grow">
              Dashboard
            </h1>
            <div className="flex gap-[24px] items-center">
              <div className="relative cursor-pointer">
                <Icon svg={WebsiteIcons["Bell"]} />
                <div className="w-fit h-fit">
                  <Icon
                    svg={WebsiteIcons["RedDot"]}
                    className="absolute -right-2 -top-2 "
                  />
                  <p className="text-[#FFF]  absolute -right-[3px] -top-[5px] text-[13px] font-semibold leading-[14px]">
                    2
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/Images/User/Avatar_Placeholder.png"}
                  alt="Avatar Placeholder"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-wrap">
              <div className="xl:w-[60%] w-[100%] p-[24px] bg-white flex">
                <div className="flex flex-col justify-between gap-[30px] flex-grow min-w-[180px]">
                  <div>
                    <h2 className="font-semibold leading-[26px] text-[18px]">
                      Total Sales & Costs
                    </h2>
                    <p className="pt-[4px] text-secondaryGray text-[14px] font-medium leading-[20px]">
                      Last 7 days
                    </p>
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="text-[32px] font-bold">
                      $350K{" "}
                      <span className="text-skyblue text-[18px]">$235K</span>
                    </h1>
                    <div className="flex gap-[8px]">
                      <div className="flex gap-[4px] items-center">
                      <Icon svg={WebsiteIcons['TopArrowGreen']}/>
                        <span className="text-green">8.56K</span>
                      </div>
                      <h3 className="text-secondaryGray font-medium text-[14px] leading-[20px]">vs last 7 days</h3>
                    </div>
                  </div>
                </div>
                <div className="h-[200px] flex-grow pl-[20px]">
                  <MultiAxisChart data={data}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default Page;
