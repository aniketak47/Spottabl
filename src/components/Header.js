import React from "react";
import './App.css';
import image from '../images/spottabl.jpeg';

const Header = () => {

  return (
    <div className="ui fixed head">
      <div className="ui container left">

      <img src={image} className="logo"/>

        <h2 className="logoHeading">YOUR SPOTTABL TEAM</h2>
        <p className="logoPara">Spottabl supports you all throughout</p>
      </div>
    </div>
  );
};

export default Header;