import "./App.css";
import { useReducer } from "react";
import NavBar from "./components/navbar";
import NavbarNB from './components/navbarNB'
import Home from "./components/home";

import { main, mainStateReducer } from "./state/mainState";

import './css/form.css'

function App() {
  let [mainState, stateDispatch] = useReducer(mainStateReducer, {
    city: "",
    country: "",
    result: "",
    temperatureSeason: "",
    Rtemperature: 0,
    FTemperature: 0,
    Humidity: 0,
    Pressure: 0,
    forecast: {},
    chatbot: false,
  });

  return (
    <main.Provider value={{ state: mainState, dispatch: stateDispatch }}>
      <div className="App bodyW ">
        {/* <NavBar /> */}
        <NavbarNB/>
        <Home />
      </div>
    </main.Provider>
  );
}

export default App;
