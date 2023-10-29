'use client'
import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

interface Props{
    data:any
    lineColor:string
}

export const SimpleLineChart = ({data,lineColor}:Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
            <Line type="monotone" dataKey="sessionCount" stroke={lineColor} strokeWidth={4} />
            <Tooltip labelFormatter={(value) => `${data[value]?.name}`} />
        </LineChart>
    </ResponsiveContainer>
  )
}
