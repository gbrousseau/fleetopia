
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mon', deliveries: 20, mileage: 120 },
  { name: 'Tue', deliveries: 25, mileage: 150 },
  { name: 'Wed', deliveries: 30, mileage: 200 },
  { name: 'Thu', deliveries: 22, mileage: 180 },
  { name: 'Fri', deliveries: 35, mileage: 220 },
  { name: 'Sat', deliveries: 15, mileage: 100 },
  { name: 'Sun', deliveries: 5, mileage: 40 },
];

export const FleetUsageChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip 
            contentStyle={{ borderRadius: '0.375rem', border: '1px solid hsl(var(--border))' }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="deliveries" name="Deliveries" fill="#1E88E5" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="right" dataKey="mileage" name="Mileage (km)" fill="#43A047" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
