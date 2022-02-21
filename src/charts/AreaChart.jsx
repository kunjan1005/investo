import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';


const Areachart = () => {

  // Sample data
  const data = [
    { name: '2020-11', students: 2000 },
    { name: '2020-11', students: 5000 },
    { name: '2020-11', students: 1000 },
    { name: '2021-2', students: 5000 },
    { name: '2021-5', students: 6000 },
    { name: '2021-8', students: 5500 },
    { name: '2021-11', students: 6500 },
    { name: '2021-11', students: 7000 },
    { name: '2022-11', students: 4000 },


  ];


  return (
    <AreaChart width={1100} height={300} data={data} className=''>
      <Area dataKey="students" fill="green" stroke="green" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </AreaChart>
  );
}

export default Areachart;