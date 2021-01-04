import React, { Component, useContext, useEffect, useState } from "react";
import { main } from "../state/mainState";

import "../css/forecast.css";
const CardsForecast = () => {
  let { state: globalState, dispatch } = useContext(main);
  useEffect(() => {}, []);
  let forecastData = globalState.forecast.data;
  //console.log("forecast", forecastData.forecast.forecastday);
  let forecastArray = forecastData.forecast.forecastday;
  return (
    <div className="centered">
      <section className="cards">
        {forecastArray.map((day) => (
          <article className="card">
            <p>{day.date}</p>
            <p>Promedio Temp : {day.day.avgtemp_c}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default CardsForecast;
