'use client'
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'

interface Props{
    data:any
    lineColor:string
}

export const SimpleAreaChart = ({data,lineColor}:Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
            <Area type="monotone" dataKey="sessionCount" stroke={lineColor} fill={lineColor} strokeWidth={1} />
            <Tooltip labelFormatter={(value) => `${data[value]?.name}`} />
        </AreaChart>
    </ResponsiveContainer>
  )
}
