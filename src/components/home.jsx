import React, { Component } from "react";
import Form from "./form";
import Display from "./display";

import "../css/form.css";
import CardsForecast from "./forecast";

const Home = () => {
  return (
    <React.Fragment>
      <Form className="bodyW" />
      <Display />
      <CardsForecast />
    </React.Fragment>
  );
};

export default Home;
