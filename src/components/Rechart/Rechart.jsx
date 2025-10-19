import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Rechart = ({ ratings }) => {
  if (!ratings) return null;

  return (
    <div className="max-w-3xl md:max-w-7xl  my-6  ">
      
      <div style={{ width: '', height: 300 }}>
        <ResponsiveContainer >
          <BarChart
            data={ratings}
            layout="vertical"
           
          >
            
            <XAxis type="number"
            axisLine={false}
            tickLine={false} />
            
            <YAxis
              type="category"
              dataKey="name"
              orientation="left"
              tick={{ textAnchor: 'end' }}
              reversed={true}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="count" fill="#FFA500" /> 
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Rechart;
