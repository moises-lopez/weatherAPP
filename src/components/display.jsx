import React, { Component, useContext } from "react";

import { main } from "../state/mainState";

import "../css/form.css";

const Display = () => {
  let { state: globalState, dispatch } = useContext(main);
  let currentDate = new Date().toLocaleDateString();

  return (
    <React.Fragment>
      {/* <div className="flex_right weather_Font">
        <div className="display_flex_parent">
          <div className="display_flex_left">
            <p className="big_font">{globalState.Rtemperature}°K</p>
            <p className="grey_font">{globalState.Ltemperature}°K</p>
            <p className="small_font">Humidity: {globalState.Humidity}</p>
            <p className="small_font">Pressure: {globalState.Pressure}</p>
          </div>
          <div className="display_flex_right medium_font">
            <p>{currentDate}</p>
            <p>{globalState.temperatureSeason}</p>
            <p>{`${globalState.city}, ${globalState.country}`}</p>
            <p>{globalState.result}</p>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Display;
