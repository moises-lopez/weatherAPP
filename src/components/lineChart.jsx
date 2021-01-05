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

    console.log(this.props);
    const {data: data, big: big} = this.props;

    var dataArr = [];
    let counter = 0;
    data.map((hourData) => {
      dataArr.push({
        hour: counter,
        ammount: hourData.temp_c,
      });
      counter++;
    });

    console.log(dataArr);
    console.log(big, "big")

    const smallW = 300
    const smallH = 100
    const bigW = 900
    const bigH = 300

    return (
      <AreaChart
        width={big ? bigW : smallW}
        height={big ? bigH: smallH}
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
