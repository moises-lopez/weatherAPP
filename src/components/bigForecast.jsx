import React, { Component, useContext } from "react";
import Chart from "./lineChart";
import "../css/bigForecast.css";

import { main } from "../state/mainState";

const BigForecast = ({ forecastValues }) => {
  console.log(forecastValues, "forecast");

  let { state: globalState, dispatch } = useContext(main);
  return (
    <React.Fragment>
      <div className="width100">
        <div className="parentFlex">
          <div className="left_Flex">
            <p className="big_text">{forecastValues.day.avgtemp_c}°C</p>
            <p className="middle_text">
              Humidity: {forecastValues.day.avghumidity}
            </p>
            <p className="middle_text">
              Total Percipitation: {forecastValues.day.totalprecip_mm} mm
            </p>
          </div>
          <div className="center_Flex">
            <Chart
              data={forecastValues.hour}
              big={true}
              className="big_chart"
            />
          </div>
          <div className="right_Flex">
            <p className="big_date">{forecastValues.date}</p>
            <p className="medium_date">{forecastValues.day.condition.text}</p>
            <img src={forecastValues.day.condition.icon} />
            <p className="medium_date">{globalState.city}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BigForecast;
