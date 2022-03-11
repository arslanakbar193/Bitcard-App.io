import * as React from "react";
import { LineChart, Line ,XAxis,CartesianGrid,} from "recharts";
const data = [
    {
      name: "2010",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "2013",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "2016",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "2019",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "2022",
      uv: 1890,
      pv: 4800,
      amt: 2181
    }
  ];
  
  export default function Charts() {
    return (
      <LineChart width={300} height={100} data={data}>
       <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    );
  }
  