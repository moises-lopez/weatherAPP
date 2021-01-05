import React, { Component, useContext, useEffect, useState } from "react";
import { main } from "../state/mainState";
import Chart from "./lineChart";

import "../css/forecast.css";
const CardsForecast = () => {
  let { state: globalState, dispatch } = useContext(main);
  let forecastData = globalState.forecast;

  if (globalState.loading === true) {
    return (
      <div className="centered">
        <div className="loader"></div>
      </div>
    );
  }
  if (!forecastData["data"]) return null;

  //console.log("forecast", forecastData.forecast.forecastday);
  let forecastArray = forecastData.data.forecast.forecastday;

  //render cards
  let cards = forecastArray.map((day) => (
    <article id={day.date} key={day.date} className="card mycard padding ">
      <p>{day.date}</p>
      <img className="photo" src={day.day.condition.icon}></img>
      <p>Promedio Temp : {day.day.avgtemp_c}</p>
      <Chart data={day.hour} />
    </article>
  ));

  return (
    <div>
      <section className="cards">{cards}</section>
    </div>
  );
};

export default CardsForecast;
