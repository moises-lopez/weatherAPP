import React, { Component, useContext, useState } from "react";
import axios from "axios";

import { main } from "../state/mainState";

import "../css/form.css";

const Form = () => {
  let { state: globalState, dispatch } = useContext(main);

  let [keyword, setKeyword] = useState("");

  let [cities, setCities] = useState([]);

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  let [fields, setFields] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    phone: "",
    age: 0,
  });

  const onFieldChange = (e) => {
    let { id, value } = e.target;

    let fieldsCopy = { ...fields };

    fieldsCopy[id] = value;
  };

  const handleSearch = async (name, url) => {
    const city = name;

    try {
      setLoading(true);
      dispatch({ type: "Loading", payload: { loading: true } });

      // const data = await axios.get(
      //   `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c41d6eca7b601b2cc4a19fbac586dc5e`
      // );
      const data4days = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=139f916626ab43b9a1d44405210401&q=${city}&days=7`
      );

      dispatch({ type: "Forecast", payload: { Forecast: data4days } });

      // dispatch({
      //   type: "SET_STATE",
      //   payload: { result: data.data.weather[0].description },
      // });

      // dispatch({
      //   type: "SET_COUNTRY",
      //   payload: { country: data.data.sys.country },
      // });

      // dispatch({
      //   type: "TEMPERATRUE_SEASON",
      //   payload: { temperatureSeason: data.data.weather[0].main },
      // });

      // dispatch({
      //   type: "R_TEMPERATURE",
      //   payload: { Rtemperature: data.data.main.temp },
      // });

      // dispatch({
      //   type: "L_TEMPERATURE",
      //   payload: { Ltemperature: data.data.main.feels_like },
      // });

      // dispatch({
      //   type: "Humidity",
      //   payload: { Humidity: data.data.main.humidity },
      // });

      // dispatch({
      //   type: "Pressure",
      //   payload: { Pressure: data.data.main.pressure },
      // });
    } catch (err) {
      setLoading(false);

      setError(true);
    } finally {
      setLoading(false);
    }
    dispatch({ type: "Loading", payload: { loading: false } });
  };

  const onCitySelect = (name, url) => {
    setKeyword(name);
    handleSearch(name, url);
    setCities([]);
  };

  let renderCities = cities.map(({ id, name, region, url }) => {
    return (
      <CityOption
        key={id}
        id={id}
        url={url}
        onCitySelect={onCitySelect}
        name={name}
        region={region}
      />
    );
  });

  const handleChange = async (e) => {
    setKeyword(e.target.value);

    if (e.target.value.length == 0) return;

    const apiKey = "139f916626ab43b9a1d44405210401";

    try {
      let { data } = await axios.get(
        `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${e.target.value}`
      );

      setCities(data);
    } catch (err) {
      console.log(err.message);
    }

    //api call

    // dispatch({ type: "CHANGE_CITY", payload: { city: e.currentTarget.value } });
  };

  return (
    <React.Fragment>
      <div className="test ">
        <form
          className="search"
          autoComplete={"" + Math.random()}
          onSubmit={() => {}}
        >
          <div className="form-group dropdown">
            <label htmlFor="cityname">Write the name of your city here:</label>
            <input
              value={keyword}
              id="cityname"
              type="text"
              autoComplete={"" + Math.random()}
              name="city"
              className="form-control"
              onChange={handleChange}
            />
            <div className="centered dropdown-content">
              <div>{renderCities}</div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

const CityOption = ({ name, id, url, region, onCitySelect }) => {
  let [isHovering, setHovering] = useState(false);

  return (
    <div
      className={`autocomplete-items flex-column ${isHovering ? "hover" : ""}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => onCitySelect(name, url)}
    >
      <p>{name}</p>
    </div>
  );
};

export default Form;
