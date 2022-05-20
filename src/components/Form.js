import React from "react";
import "../css/form.css";

export default function Form() {
  return (
    <section id="contacto" className="contac-section">
      <h1>¿Tienes un proyecto?</h1>
      <div className="contac-div">
        <form
          action="mailto:mykuregod@gmail.com"
          enctype="multipart/form-data"
          className="contac-form"
          method="get"
        >
          <label htmlFor="name">Nombre:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="form-data"
            required
            id="name"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
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
            id="phone"
            placeholder="Teléfono"
            className="form-data"
            required
          />
          <br />
          <label htmlFor="company">Empresa:</label>
          <br />
          <input
            type="text"
            name="company"
            id="company"
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
            id="project"
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
            id="details"
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

<form action="envio.php" method="GET">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" />
  <label for="apellido">Apellido</label>
  <input type="text" id="apellido" name="apellido" />
  <button id="envio">Enviar Formulario</button>
</form>;
