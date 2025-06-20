import React, { useState }  from "react";
import CardPlanos from "./cardplanos"

const dadosPlanos=[
    {
        id: "1",
        titulo: "ForGrow",
        descricao: "Para quem já tem presença online, mas quer crescer com estratégia",
        preco: "R$30,47/Mês",
        servico1: "Site completo ou Landing Page",
        servico2: "Integração com domínio + hospedagem incluída",
        servico3: "E-mail profissional",
        servico4: "Gestão de Instagram",
        servico5: "Criação de campanha de tráfego pago",
        servico6: "Gerenciador ForWize simples",
        destaques: false
    },

     {
        id: "2",
        titulo: "ForPower",
        descricao: "Para quem quer dominar o digital com performance, automação e inteligência de dados",
        preco: "R$65,47/Mês",
        servico1: "E-commerce ou loja online estruturada",
        servico2: "Gestão completa de redes sociais",
        servico3: "Estratégia mensal com reunião de alinhamento",
        servico4: "Tráfego pago contínuo com acompanhamento de métricas",
        servico5: "Otimização de funil (leads, clique, conversão)",
        servico6: "Power BI com dados em tempo real",
        servico7: "Gerenciador ForWize completo",
        servico8: "Suporte premium",
        servico9: "Automação de mensagens no WhatsApp",
        destaques: true,

    },

    {
        id: "3",
        titulo: "ForStart",
        descricao: "Para quem está começando e quer presença online com base profissional",
        servico1: "Site institucional com até 5 seções",
        servico2: "Integração com domínio + hospedagem incluída",
        servico3: "Integração com WhatsApp",
        servico4: "Instagram estratégico",
        servico5: "Impulsionamento orientado",
        destaques: false,
        preco: "R$15,37/Mês",
    },


]


const Planos = ()=>{

    const [planoSelecionado, setPlanoSelecionado] =useState(null);
    
    return(
        <div className="container-planos">
            {dadosPlanos.map((p,i)=>(
                <CardPlanos 
                key={i}
                 {...p}
                 selecionado={planoSelecionado===i}
                 onSelecionar={()=>setPlanoSelecionado(i)}
                 />
            ))}
        </div>
    )
    
}

export default Planos;