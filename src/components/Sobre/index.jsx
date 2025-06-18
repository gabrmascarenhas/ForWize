// src/components/Sobre.js
import React from "react";
import "../Sobre/Sobre.css";

const Sobre = () => {
  return (
    <section className="sobre" id="sobre-a-forwize">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>Sobre a ForWize</h2>
          <p>
            A ForWize nasceu da união entre criatividade, estratégia e
            tecnologia. Nosso foco é colocar negócios à frente com soluções
            digitais inteligentes: criação de sites, gestão de redes sociais,
            identidade visual e automação de atendimento.
          </p>
          <p>
            Nós não entregamos apenas designs bonitos, mas resultados reais para
            clientes que querem se destacar no digital.
          </p>
        </div>
        <div className="sobre-imagem">
          <img src="imagdefundo/computador.png" alt="Dispositivos com sites" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
