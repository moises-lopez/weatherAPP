import React, { Component, useContext, useEffect, useState } from "react";
import { main } from "../state/mainState";

import "../css/forecast.css";
const CardsForecast = () => {
  let { state: globalState, dispatch } = useContext(main);
  useEffect(() => {}, []);
  let forecastData = globalState.forecast

  if (!forecastData["data"]) return null;

  
  //console.log("forecast", forecastData.forecast.forecastday);
  let forecastArray = forecastData.data.forecast.forecastday;


  //render cards
  let cards = forecastArray.map((day) => (
    <article className="card">
      <p>{day.date}</p>
      <p>Promedio Temp : {day.day.avgtemp_c}</p>
    </article>
  ))
  
  return (
    <div className="centered">
      <section className="cards">
       {cards}
      </section>
    </div>
  );
};

export default CardsForecast;
