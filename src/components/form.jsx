import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = { city: "", result: "" };

  handleSearch = async (e) => {
    e.preventDefault();
    const city = this.state.city;
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c41d6eca7b601b2cc4a19fbac586dc5e`
    );
    const state = data.data.weather[0].description;
    this.setState({ result: state });
  };

  handleChange = (e) => {
    this.setState({ city: e.currentTarget.value });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSearch}>
          <div className="form-group">
            <label htmlFor="cityname">City</label>
            <input
              value={this.state.city}
              id="cityname"
              type="text"
              name="city"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
        <span>{this.state.result}</span>
      </React.Fragment>
    );
  }
}

export default Form;
