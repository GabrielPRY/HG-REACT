import React from "react";
import "../css/navbar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-list">
        <li>
          <a href="#trabajos">Trabajos</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
