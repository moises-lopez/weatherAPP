import React, { Component, useContext, useState } from "react";
import axios from "axios";

import {main} from '../state/mainState'

const Form = () => {
  let { state: globalState, dispatch } = useContext(main);

  const handleSearch = async (e) => {
    e.preventDefault();
    const city = globalState.city;
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c41d6eca7b601b2cc4a19fbac586dc5e`
    );
    const state = data.data.weather[0].description;
    dispatch({type: 'SET_STATE', payload: {result: state} })
  };

  const handleChange = (e) => {
    dispatch({type: 'CHANGE_CITY', payload: {city: e.currentTarget.value }})

  };
    return (
      <React.Fragment>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="cityname">City</label>
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
      </React.Fragment>
    );
}

export default Form;
