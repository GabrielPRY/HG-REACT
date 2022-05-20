import React from "react";
import video from "../videos/video_preview_h264.mp4";
import logopng from "../images/logo_prev_ui.png";
import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video src={video} autoPlay muted loop></video>
      </div>

      <div className="hero-overlay">
        <img src={logopng} alt="logo" />
      </div>
    </section>
  );
}
