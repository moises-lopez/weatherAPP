import React, { Component, useContext, useState } from "react";
import axios from "axios";

import { main } from "../state/mainState";

import "../css/form.css";

const Form = () => {
  let { state: globalState, dispatch } = useContext(main);

  const handleSearch = async (e) => {
    e.preventDefault();
    const city = globalState.city;

    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c41d6eca7b601b2cc4a19fbac586dc5e`
    );
    const data4days = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=139f916626ab43b9a1d44405210401&q=${city}&days=7`
    );
    dispatch({ type: "Forecast", payload: { Forecast: data4days } });
    dispatch({
      type: "SET_STATE",
      payload: { result: data.data.weather[0].description },
    });
    dispatch({
      type: "SET_COUNTRY",
      payload: { country: data.data.sys.country },
    });
    dispatch({
      type: "TEMPERATRUE_SEASON",
      payload: { temperatureSeason: data.data.weather[0].main },
    });
    dispatch({
      type: "R_TEMPERATURE",
      payload: { Rtemperature: data.data.main.temp },
    });
    dispatch({
      type: "L_TEMPERATURE",
      payload: { Ltemperature: data.data.main.feels_like },
    });
    dispatch({
      type: "Humidity",
      payload: { Humidity: data.data.main.humidity },
    });
    dispatch({
      type: "Pressure",
      payload: { Pressure: data.data.main.pressure },
    });
  };

  const handleChange = (e) => {
    dispatch({ type: "CHANGE_CITY", payload: { city: e.currentTarget.value } });
  };

  return (
    <React.Fragment>
      <div className="flex_left">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="cityname">Write the name of your city here:</label>
            <input
              value={globalState.city}
              id="cityname"
              type="text"
              name="city"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
        <span>{globalState.result}</span>
      </div>
    </React.Fragment>
  );
};

export default Form;
