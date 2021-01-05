import React, { Component } from 'react';

import '../css/navbar.css'

const NavbarNB = () => {

    return ( 
        <React.Fragment>    
        <nav className="navbar">
            <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars"></i>
            </span>
            
            <a  className="logo">Daru Weather
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/sunny-weather-1-458138.png"
              alt=""
              width="50"
              height="50"
            />
            </a>
            
            <ul className="main-nav" id="js-menu">
                
            </ul>
        </nav>
        </React.Fragment>
     );
}
 
export default NavbarNB;