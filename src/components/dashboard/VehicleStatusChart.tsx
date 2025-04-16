
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Active', value: 42, color: '#43A047' },
  { name: 'In Maintenance', value: 8, color: '#FFB300' },
  { name: 'Inactive', value: 5, color: '#E53935' },
];

export const VehicleStatusChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
          <Tooltip 
            formatter={(value: number) => [`${value} vehicles`, 'Count']}
            contentStyle={{ borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
