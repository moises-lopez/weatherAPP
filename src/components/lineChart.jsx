import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default class Chart extends PureComponent {
  render() {
    const data = this.props.data;
    var dataArr = [];
    let counter = 0;
    data.map((hourData) => {
      dataArr.push({
        hour: counter,
        ammount: hourData.temp_c,
      });
      counter++;
    });
    return (
      <AreaChart
        width={300}
        height={100}
        data={dataArr}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="ammount"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    );
  }
}
