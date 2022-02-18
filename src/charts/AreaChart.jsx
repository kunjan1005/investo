import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
  
  
const Areachart = () => {
  
// Sample data
const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];
  
  
return (
<AreaChart width={1000} height={300} data={data}>
    <Area dataKey="students" fill="green" stroke="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </AreaChart>
);
}
  
export default Areachart;