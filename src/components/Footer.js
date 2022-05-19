import React from "react";
import "../css/footer.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <figure className="footer-logo-container">
          <img src={logo} alt="logo" />
        </figure>
      </div>

      <div className="footer-text">
        <p>Sitio web en construcción</p>
      </div>

      <div className="footer-text">
        <p>Diseñado por Gabriel Gauto</p>
      </div>
    </footer>
  );
}
