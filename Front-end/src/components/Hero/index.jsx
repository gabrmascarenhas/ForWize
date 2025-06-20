// src/components/Hero.js
import React from "react";
import "../Hero/Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <video autoPlay muted loop playsInline className="video-bg">
        <source
          src="/videodefundo/video-site.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      <div className="hero-content">
        <img
          src="/logo/forwize-trans.png" alt="Logo ForWize"
          className="logo-hero" />
        <p className="frase-hero">Você à frente, com soluções inteligentes.</p>
      </div>

    </section>
  );
}

export default Hero;
