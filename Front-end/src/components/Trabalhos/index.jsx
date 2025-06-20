
import "../Trabalhos/Trabalhos.css";

const NossoTrabalho = () => {
  return (
    <section id="portfolio" className="galeria">
      <div className="container-galeria">
        <h2>Nosso Trabalho</h2>

        <p>Veja alguns dos projetos incríveis que ajudamos a transformar em realidade.</p>

        <div className="grid-galeria">
          <img src="/imgs/projeto1.jpg" alt="Projeto 1" />
          <img src="/imgs/projeto2.jpg" alt="Projeto 2" />
          <img src="/imgs/projeto3.jpg" alt="Projeto 3" />
          <img src="/imgs/projeto4.jpg" alt="Projeto 4" />
          {/* <img src="/imgs/projeto5.jpg" alt="Projeto 5" />
          <img src="/imgs/projeto6.jpg" alt="Projeto 6" /> */}
        </div>
      </div>
    </section>
  );
};

export default NossoTrabalho;
