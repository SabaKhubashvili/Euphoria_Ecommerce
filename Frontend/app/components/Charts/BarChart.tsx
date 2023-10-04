'use client'
import React from 'react'
import {Bar} from 'react-chartjs-2'

interface Props{
    data:any,
    options:any
}

export const BarChart = ({data,options}:Props) => {
  return (
    <Bar data={data} options={options} />
  )
}
