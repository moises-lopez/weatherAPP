import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/sunny-weather-1-458138.png"
              alt=""
              width="50"
              height="50"
            />
            Daru Weather
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
