import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [
  { week: 1, activity: 20 },
  { week: 2, activity: 35 },
  { week: 3, activity: 15 },
  { week: 4, activity: 50 },
  { week: 5, activity: 45 },
];

const Graph = (props) =>
  <LineChart width={200} height={100} data={data}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#02A8F3" />
        <stop offset="100%" stopColor="#FFC2FB" />
      </linearGradient>
    </defs>
    <Line
      type="natural"
      dataKey="activity"
      stroke="url(#colorUv)"
      dot={false}
      strokeWidth={4}
      cornerRadius={4}
    />
  </LineChart>;

export default Graph;
