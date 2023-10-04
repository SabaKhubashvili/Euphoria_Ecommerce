"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: any;
}

export const MultiAxisChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className={'relative'}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        {/* <Legend  style={{top:'0px !important'}} iconType="circle"/> */}
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
