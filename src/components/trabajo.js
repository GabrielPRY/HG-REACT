import React from "react";
import "../css/jobs.css";

export default function Trabajo({ img, titulo, descripcion }) {
  return (
    <article className="job-article">
      <figure className="job-article-img-container">
        <img src={img} alt="photo" />
      </figure>
      <div className="job-article-details">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </article>
  );
}
