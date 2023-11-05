import { MultiAxisChart } from "@/app/components/Charts/MultiAxisChart";
import { SeveralContentChart } from "@/app/components/Charts/SeveralContentChart";
import { Icon } from "@/app/components/Icon";
import { SimpleAreaChartComponent } from "@/app/components/admin/ChartComponents/SimpleAreaChartComponent";
import { SimpleLineChartComponent } from "@/app/components/admin/ChartComponents/SimpleLineChartComponent";
import { PageTop } from "@/app/components/admin/pageTop/PageTop";
import { PublicSans } from "@/app/components/assets/Fonts";
import { MainTable } from "@/app/components/tables/MainTable";
import { MostSaledProducts, SessionsData, orders } from "@/app/constants";
import { Dropdown_Down } from "@/public/Svg/Icons";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import React from "react";

const Page = () => {

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



  const actions = (
    <div
      style={{
        flexBasis: 100 / (Object.keys(orders[0]).length + 1) + "%",
      }}
      className="flex justify-end cursor-pointer"
    >
      <Dropdown_Down />
    </div>
  );


  return (
    <main className="">
        <div className={`${PublicSans.className} w-full`}>
          <PageTop pageTitle="Dashboard"/>
          
          <div className="flex flex-col gap-[24px]">
            {/* Top Charts */}
            <div className="flex flex-wrap  justify-between mt-[40px] gap-y-4">
              <div className="xl:w-[60%] w-[100%] p-[24px] bg-white flex rounded-[16px]">
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
                      $350K
                      <span className="text-skyblue text-[18px]">$235K</span>
                    </h1>
                    <div className="flex gap-[8px]">
                      <div className="flex gap-[4px] items-center">
                        <Icon svg={WebsiteIcons["TopArrowGreen"]} />
                        <span className="text-green">8.56K</span>
                      </div>
                      <h3 className="text-secondaryGray font-medium text-[14px] leading-[20px]">
                        vs last 7 days
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="h-[200px] flex-grow pl-[20px]">
                  <MultiAxisChart data={data} />
                </div>
              </div>
              <div className="xl:w-[39%] w-[100%]">
                <SimpleLineChartComponent
                  title="Sessions"
                  mainValue="16.5K"
                  data={SessionsData}
                  lineColor={"#D02626"}
                  percentage="-3%"
                />
              </div>
            </div>

            {/* 3 Linecharts */}
            <div className="flex justify-between gap-[26px] xl:flex-nowrap flex-wrap">
              <div className="xl:basis-1/3 basis-full">
                <SimpleAreaChartComponent
                  title="Total Orders"
                  mainValue="25.7K"
                  data={SessionsData}
                  lineColor={"#1EB564"}
                  percentage="6%"
                />
              </div>
              <div className="xl:basis-1/3 md:w-[47%] w-full">
                <SimpleAreaChartComponent
                  title="Total Profit"
                  mainValue="50K"
                  data={SessionsData}
                  lineColor={"#1EB564"}
                  percentage="12%"
                />
              </div>
              <div className="xl:basis-1/3 md:w-[47%] w-full">
                <SimpleAreaChartComponent
                  title="Discounted amount"
                  mainValue="12K"
                  data={SessionsData}
                  lineColor={"#D02626"}
                  percentage="-2%"
                />
              </div>
            </div>
            <div className="flex gap-[26px] xl:flex-nowrap flex-wrap">
              {/* Reports && activity */}
              <div className="xl:!w-[60%] w-full">
                <SeveralContentChart />
              </div>
              <div className="xl:!w-[39%] w-full bg-white p-[24px]">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-[18px] font-semibold leading-[26px]">
                      Trending Products
                    </h3>
                    <p className="text-secondaryGray font-medium text-[14px]">
                      Total 10,4k visitors
                    </p>
                  </div>
                  <Icon svg={WebsiteIcons["Verticaldots"]} />
                </div>
                <div className="flex flex-col gap-[18px] mt-[20px] h-[566px] overflow-y-auto">
                  { MostSaledProducts.map((product,index)=>(
                    <div className="flex  items-center justify-between" key={index}>
                    <div className="flex gap-[16px]">
                      <div className="w-[46px] h-[46px]">
                        {/* Here must be image */} img
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold">
                          {product.name}
                        </h3>
                        <p className="text-secondaryGray text-[13px] leading-[20px]">
                          Item: #FXZ-4567
                        </p>
                      </div>
                    </div>
                    <div className="text-[15px] font-medium">${product.price}</div>
                  </div>
                  ))
                  }
                  </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] bg-white rounded-[16px] p-[24px]">
                  <div className="flex items-center justify-between">
                      <h1 className="text-[20px] font-medium text-blackBlue">Recent Orders</h1>
                      <Icon svg={WebsiteIcons['Verticaldots']}/>
                  </div>        
                  <MainTable
                    type="secondary"
                    topContent={['Order id', 'created', 'customer', 'total', 'profit', 'status' , ' ']}
                    bodyContent={orders.slice(0,10)}
                    actions={actions}
                  />
            </div>
          </div>
        </div>
    </main>
  );
};

export default Page;
