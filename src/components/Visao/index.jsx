import React from 'react';
import "../Visao/Visao.css";

const resultados = [
  "📈 Aumento de 300% no alcance no Instagram",
  "🛒 2x mais conversões no site",
  "🤖 Atendimento automatizado 24h via WhatsApp",
  "🎨 Marca visual forte e lembrada",
  "🔍 Site no topo das buscas locais",
  "🚀 Tráfego pago com retorno real",
  "❤️ Clientes mais engajados",
  "📊 Dados claros e decisões inteligentes",
];

export default function VisaoResultado() {
  return (
    <section className="visao-resultado">
      <h2>Visão de Resultado</h2>
      <div className="resultados-slider">
        <div className="slider-track">
          {resultados.concat(resultados).map((item, index) => (
            <div className="card-resultado" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
