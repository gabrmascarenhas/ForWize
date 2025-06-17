// src/components/Servicos.js
import React from "react";

const Servicos = () => {
  return (
    <section className="servicos" id="o-que-fazemos">
      <div className="container-servicos">
        <h2>Nossos Serviços</h2>
        <div className="servicos-cards">
          <div className="card-servico">
            <h3>Agência Full Service</h3>
            <p>
              Cuidamos de tudo para sua marca crescer: identidade, site, redes
              sociais, conteúdo e resultado. Um só lugar, todas as soluções.
            </p>
          </div>

          <div className="card-servico">
            <h3>Criação de Sites</h3>
            <p>
              Desenvolvimento de sites institucionais, landing pages e lojas
              online com foco em performance, design e conversão.
            </p>
          </div>

          <div className="card-servico">
            <h3>E-commerce & Otimização</h3>
            <p>
              Estruturação de lojas virtuais, correção de bugs, automações
              internas e estratégias para melhorar sua visibilidade nas buscas.
            </p>
          </div>

          <div className="card-servico">
            <h3>Design Visual</h3>
            <p>
              Identidade visual, logotipo, paleta de cores e materiais gráficos
              alinhados à essência do seu negócio.
            </p>
          </div>

          <div className="card-servico">
            <h3>Gestão de Redes Sociais</h3>
            <p>
              Planejamento, criação e agendamento de conteúdos estratégicos que
              conectam com o público certo.
            </p>
          </div>

          <div className="card-servico">
            <h3>Automação & Tráfego Pago</h3>
            <p>
              Impulsionamento de campanhas, automação de atendimento e
              estratégias de venda para gerar resultados reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
