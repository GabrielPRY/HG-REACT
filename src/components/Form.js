import React from "react";
import "../css/form.css";

export default function Form() {
  return (
    <section id="contacto" className="contac-section">
      <h1>¿Tienes un proyecto?</h1>
      <div className="contac-div">
        <form action="https://www.google.com/?hl=es" className="contac-form">
          <label htmlFor="name">Nombre:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="form-data"
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form-data"
            required
          />
          <br />
          <label htmlFor="phone">Teléfono:</label>
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            className="form-data"
            required
          />
          <br />
          <label htmlFor="company">Empresa:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Empresa"
            className="form-data"
            required
          />
          <br />
          <label htmlFor="project">Proyecto:</label>
          <br />
          <input
            type="text"
            name="project"
            placeholder="Proyecto"
            className="form-data"
            required
          />
          <br />
          <label htmlFor="details">Detalles:</label>
          <br />
          <input
            type="text"
            name="details"
            placeholder="Detalles"
            className="form-data"
            required
          />
          <br />
          <input type="submit" className="data-submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
}
