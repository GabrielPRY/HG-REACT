import Trabajo from "./trabajo";
import React from "react";
import trabajosjson from "../json/trabajos.json";
import { v4 as uuidv4 } from "uuid";
import "../css/jobs.css";

export default function ListaTrabajos() {
  const trabajoslist = trabajosjson;

  return (
    <section id="trabajos" className="jobs">
      <h1>Trabajos</h1>
      <div className="jobs-grid-container">
        {trabajoslist.map(({ img, titulo, descripcion }) => (
          <Trabajo
            key={uuidv4()}
            img={img}
            titulo={titulo}
            descripcion={descripcion}
          />
        ))}
      </div>
    </section>
  );
}
