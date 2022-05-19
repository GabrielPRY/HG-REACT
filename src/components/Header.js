import React from "react";
import logo from "../images/logo.png";
import "../css/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </div>

      <div className="address header-div">
        <a href="https://goo.gl/maps/xqmWrfMFAXf7hbTM8" target="_blank">
          <i className="icon-location header-icon"></i>
          <p>Arecayá, Incas 221. Mariano Roque Alonso</p>
        </a>
      </div>

      <div className="phone header-div">
        <a
          href="https://wa.me/595981197233?text=Me%20interesa%20un%20proyecto%20"
          target="_blank"
        >
          <i className="icon-mobile header-icon"></i>
          <p>+595981197233</p>
        </a>
      </div>

      <div className="email header-div">
        <a href="mailto:hgautoch@hotmail.com" target="_blank">
          <i className="icon-microsoftoutlook header-icon"></i>
          <p>hgautoch@hotmail.com</p>
        </a>
      </div>
    </header>
  );
}
