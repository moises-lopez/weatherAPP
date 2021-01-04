import "./App.css";
import {useReducer} from 'react'
import NavBar from "./components/navbar";
import Form from "./components/form";

import {main, mainStateReducer} from './state/mainState'

function App() {

  let [mainState, stateDispatch] = useReducer(mainStateReducer, {
    city: "",
    result: "",
    chatbot: false
  })


  return (
    <main.Provider value={{state: mainState, dispatch: stateDispatch}} >
    <div className="App">
      <NavBar />
      <Form />
    </div>
    </main.Provider>
  );
}

export default App;
