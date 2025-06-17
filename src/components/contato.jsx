// src/components/Contato.js
import React from "react";

const Contato = () => {
  return (
    <section className="contato" id="contato">
      <div className="container-contato">
        <h2>Entre em Contato</h2>
        <p>
          Estamos prontos para transformar sua ideia em projeto. Fale com a ForWize
          pelos nossos canais:
        </p>

        <div className="contato-grid">
          <div className="contato-item">
            <img src="assets/icons/whatsapp.png" alt="WhatsApp" />
            <p>
              <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </p>
          </div>

          <div className="contato-item">
            <img src="assets/icons/email.png" alt="Email" />
            <p>
              <a href="mailto:contato@forwize.com">E-mail</a>
            </p>
          </div>

          <div className="contato-item">
            <img src="assets/icons/telefone.png" alt="Telefone" />
            <p>
              <a href="tel:+5511999999999">(11) 99999-9999</a>
            </p>
          </div>

          <div className="contato-item">
            <img src="assets/icons/instagram.png" alt="Instagram" />
            <p>
              <a href="https://instagram.com/suaempresa" target="_blank" rel="noreferrer">
                @suaempresa
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
