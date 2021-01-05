import React, { Component, createContext } from "react";

const globalState = {
  city: "",
  country: "",
  result: "",
  temperatureSeason: "",
  Rtemperature: 0,
  FTemperature: 0,
  Humidity: 0,
  Pressure: 0,
  forecast: {},
  loading: false,
  chatbot: false,
};

const main = createContext(globalState);

const mainStateReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, chatBot: !state.chatbot };
    case "CHANGE_CITY":
      return { ...state, city: action.payload.city };
    case "SET_STATE":
      return { ...state, result: action.payload.result };
    case "SET_COUNTRY":
      return { ...state, contry: action.payload.country };
    case "TEMPERATRUE_SEASON":
      return { ...state, temperatureSeason: action.payload.country };
    case "R_TEMPERATURE":
      return { ...state, Rtemperature: action.payload.Rtemperature };
    case "L_TEMPERATURE":
      return { ...state, Ltemperature: action.payload.Ltemperature };
    case "Humidity":
      return { ...state, Humidity: action.payload.Humidity };
    case "Pressure":
      return { ...state, Pressure: action.payload.Pressure };
    case "Forecast":
      return { ...state, forecast: action.payload.Forecast };
    case "Loading":
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};

export { main, mainStateReducer };
