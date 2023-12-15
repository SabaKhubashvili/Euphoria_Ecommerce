import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LinearChart({
  data,
  valueKey,
  XAxisKey,
  yAxis=true
}: {
  data: any;
  valueKey: string;
  XAxisKey: string;
  yAxis?:boolean
}) {


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} className="w-full h-full">
          <XAxis dataKey={XAxisKey} />
        {yAxis &&
        <YAxis width={1} /> 
        }
        <Tooltip />
        <Line type="linear" dataKey={valueKey} stroke="#0F60FF" />
      </LineChart>
    </ResponsiveContainer>
  );
}
