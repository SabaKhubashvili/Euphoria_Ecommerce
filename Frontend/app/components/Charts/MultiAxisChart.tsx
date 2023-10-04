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
          stroke="#0F60FF"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="cost" stroke="#0FB7FF" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};
