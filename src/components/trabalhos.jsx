// src/components/Trabalhos.js
import React from "react";

const Trabalhos = () => {
  return (
    <section className="trabalhos" id="nossos-trabalhos">
      <div className="container-galeria">
        <h2>Nosso Trabalho</h2>
        <p>Projetos desenvolvidos com estratégia, criatividade e muita dedicação.</p>

        <div className="grid-galeria">
          <img src="assets/img/projeto1.jpg" alt="Projeto 1" />
          <img src="assets/img/projeto2.jpg" alt="Projeto 2" />
          <img src="assets/img/projeto3.jpg" alt="Projeto 3" />
          <img src="assets/img/projeto4.jpg" alt="Projeto 4" />
          <img src="assets/img/projeto5.jpg" alt="Projeto 5" />
          <img src="assets/img/projeto6.jpg" alt="Projeto 6" />
        </div>
      </div>
    </section>
  );
};

export default Trabalhos;
