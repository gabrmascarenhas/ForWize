// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <video autoPlay muted loop playsInline className="video-bg">
  <source
    src="/videodefundo/Blue Modern Technology Youtube Video Intro.mp4"  type="video/mp4"
  />
  Seu navegador não suporta vídeo HTML5.
</video>

<div className="hero-content">
  <img
   src="/logo/ForWizetransparente.png"   alt="Logo ForWize"
   className="logo-hero"
  />
  <p className="frase-hero">Você à frente, com soluções inteligentes.</p>
</div>

    </section>
  );
};

export default Hero;
