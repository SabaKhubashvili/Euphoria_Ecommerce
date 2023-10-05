import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LinearChart({
  data,
  valueKey,
  XAxisKey
}: {
  data: any;
  valueKey: string;
  XAxisKey: string;
}) {


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} className="w-full h-full">
        <XAxis dataKey={XAxisKey} />
        <YAxis width={45}/> 
        <Tooltip />
        <Line type="linear" dataKey={valueKey} stroke="#0F60FF" />
      </LineChart>
    </ResponsiveContainer>
  );
}
