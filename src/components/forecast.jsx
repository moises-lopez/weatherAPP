import React, { Component, useContext, useEffect, useState } from "react";
import { main } from "../state/mainState";
import Chart from "./lineChart";
import BigForecast from './bigForecast'

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
  let mainCard = forecastArray[0]
  forecastArray = forecastArray.filter( (el, index) => (
   index != 0
   ))

  let cards = forecastArray.map((day) => (
    <article id={day.date} key={day.date} className="card mycard padding ">
      <p>{day.date}</p>
      {console.log("map")}
      <img className="photo" src={day.day.condition.icon}/>
      <p>Promedio Temp : {day.day.avgtemp_c}</p>
      <Chart data={day.hour} />
    </article>
  ));
  console.log(cards, cards.length)
  return (
    <div>
      <BigForecast
        forecastValues={mainCard}
      />
      <section className="cards">{cards}</section>
    </div>
  );
};

export default CardsForecast;
