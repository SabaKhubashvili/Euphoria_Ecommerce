'use client'

import React from 'react'
import { PieChart } from '../../Charts/PieChart'

interface Props{
    title:string,
    data:any
    valueKey:string
    subTitle:string
}

export const PieChartComponent = ({title,data,subTitle,valueKey}:Props) => {

  return (
    <div className="w-full h-full p-[24px] bg-white  rounded-[16px]">
    <div className="flex flex-col justify-between gap-[30px] flex-grow min-w-[180px]">
      <div>
        <h2 className="font-semibold leading-[26px] text-[18px]">
         {title}
        </h2>
        <p className="pt-[4px] text-secondaryGray text-[14px] font-medium leading-[20px]">
          {subTitle}
        </p>
      </div>
    </div>
     <div className="h-[500px] w-full pl-[20px]">
        <PieChart valueKey={valueKey} data={data}/>
      </div>
  </div>
  )
}
