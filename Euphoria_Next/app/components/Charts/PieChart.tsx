'use client'
import React, { PureComponent } from 'react';
import { PieChart as RechartPieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


export const PieChart = ({data,valueKey}:{data:any,valueKey:string}) => {
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RechartPieChart width={400} height={400}>
          <Pie
            dataKey={valueKey}
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </RechartPieChart>
      </ResponsiveContainer>
    );
  
}

