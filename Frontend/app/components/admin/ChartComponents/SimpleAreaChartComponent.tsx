import { WebsiteIcons } from '@/public/Svg/IconsObject'
import React from 'react'
import { SimpleLineChart } from '../../Charts/SimpleLineChart'
import { Icon } from '../../Icon'
import { SimpleAreaChart } from '../../Charts/AreaChart'

interface Props{
    title:string,
    data:any
    lineColor:string
    mainValue:string
    percentage:string
}

export const SimpleAreaChartComponent = ({title,data,lineColor,percentage,mainValue}:Props) => {
  const isPositiveNum = percentage[0] !== '-'
  return (
    <div className="w-full p-[24px] bg-white flex rounded-[16px]">
    <div className="flex flex-col justify-between gap-[30px] flex-grow min-w-[180px]">
      <div>
        <h2 className="font-semibold leading-[26px] text-[18px]">
         {title}
        </h2>
        <p className="pt-[4px] text-secondaryGray text-[14px] font-medium leading-[20px]">
          Last 7 days
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-[32px] font-bold">
            {mainValue}
        </h1>
        <div className="flex gap-[8px]">
          <div className="flex gap-[4px] items-center">
          <Icon svg={WebsiteIcons[isPositiveNum ? 'TopArrowGreen' :'BottomArrowRed']}/>
            <span className={` ${isPositiveNum ? 'text-green' : 'text-[#D02626]'} `}>{isPositiveNum ? percentage : percentage.slice(1)}</span>
          </div>
          <h3 className="text-secondaryGray font-medium text-[14px] leading-[20px]">vs last 7 days</h3>
        </div>
      </div>
    </div>
     <div className="h-[200px] flex-grow pl-[20px]">
        <SimpleAreaChart lineColor={percentage[0] === '-' ? '#D02626' : '#1EB564'} data={data}/>
      </div>
  </div>
  )
}
