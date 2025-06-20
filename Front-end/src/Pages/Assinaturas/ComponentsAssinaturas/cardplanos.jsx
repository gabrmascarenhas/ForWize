import React, { useState } from "react";
import { CheckCircle, Check } from "lucide-react";
import "./cardplanos.css";

const CardPlanos = ({
    titulo,
    descricao,
    preco,
    servico1,
    servico2,
    servico3,
    servico4,
    servico5,
    servico6,
    servico7,
    servico8,
    servico9,
    destaques,
    selecionado,
    onSelecionar,
}) => {
    return (
        <>
        <div
        
        className={`card-planos ${destaques ? "highlight" : ""} ${
                selecionado ? "selecionado" : ""
            }`}
            onClick={onSelecionar}
            style={{ position: "relative", cursor: "pointer" }}
        >
            
            {destaques && (
                <div className="selo-recomendado"
                >RECOMENDADO
                </div>
            )}

            <div className="container-principal">
                <h3 className="titulo">
                    {titulo}{" "}
                    {selecionado && (
                        <CheckCircle
                            size={18}
                            // color="#29bec4"
                            className="check-icon-inline"
                        />
                    )}
                </h3>
                <hr className="linha"/>
                <h4 className="descricao">{descricao}</h4>
                <div className="servicos-container">
                    {servico1 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico1}
                        </p> 
                    )}
                    {servico2 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico2}
                        </p>
                    )}
                    {servico3 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico3}
                        </p>
                    )}
                    {servico4 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico4}
                        </p>
                    )}
                    {servico5 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico5}
                        </p>
                    )}
                    {servico6 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico6}
                        </p>
                    )}
                    {servico7 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico7}
                        </p>
                    )}
                    {servico8 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico8}
                        </p>
                    )}
                    {servico9 && (
                        <p className="servico">
                            <Check size={18} className="check2" />
                            {servico9}
                        </p>
                    )}
                </div>
            </div>
            <div className="preco-container">
                <p className="preco">{preco}</p>
            </div>
        </div>
           
           </>
    );
};
export default CardPlanos;