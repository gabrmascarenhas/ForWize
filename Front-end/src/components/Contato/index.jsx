import "../Contato/Contato.css";


// As linhas de importação abaixo devem permanecer comentadas se você for usar paths absolutos do public/
// import whatsappIcon from "../../assets/icons/whatsapp.png";
// import emailIcon from "../../assets/icons/email.png";
// import phoneIcon from "../../assets/icons/phone.png";
// import instagramIcon from "../../assets/icons/instagram.png";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container-contato">
        <h2>Fale com a gente</h2>
        <p>Escolha o canal de atendimento ideal para você:</p>

        <div className="contato-grid">
          <div className="contato-item">
         
            <img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
            <a href="https://wa.me/seunumerodowhatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>

          <div className="contato-item">
          
            <img src="/assets/icons/email.png" alt="E-mail" />
            <a href="mailto:contato@forwize.com.br">
              E-mail
            </a>
          </div>

          <div className="contato-item">
         
            <img src="/assets/icons/phone.png" alt="Telefone" />
            <a href="tel:+5511999999999">
              Telefone
            </a>
          </div>

          <div className="contato-item">
           
            <img src="/assets/icons/instagram.png" alt="Instagram" />
            <a href="https://instagram.com/seuuser" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;