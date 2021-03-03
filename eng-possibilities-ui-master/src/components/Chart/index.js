import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [{name: '2021', uv: 10010, pv: 2400, amt: 2400}, 
              {name: '2022', uv: 10020, pv: 2400, amt: 2400},
              {name: '2023', uv: 11030, pv: 2300, amt: 2400}, 
              {name: '2024', uv: 11060, pv: 2200, amt: 2400},
              {name: '2025', uv: 11100, pv: 2400, amt: 2400}, 
              {name: '2026', uv: 12200, pv: 2400, amt: 2400},
              {name: '2027', uv: 12250, pv: 2300, amt: 2400}, 
              {name: '2028', uv: 13540, pv: 2200, amt: 2400},
              {name: '2029', uv: 13370, pv: 2400, amt: 2400},
              {name: '2030', uv: 14400, pv: 2300, amt: 2400},
              {name: '2031', uv: 15800, pv: 2300, amt: 2400}];



const Chart = () => {
  return (
    <>
        <p style={{fontSize:'30px'}}>Return in Value($) vs. Year over a 10 Year Period</p>
        <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis domain={[10000, 16000]}/>
        </LineChart>
    </>
  );
};



export default Chart;
