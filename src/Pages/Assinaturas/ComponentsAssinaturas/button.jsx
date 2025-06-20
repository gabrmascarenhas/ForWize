import {useState,React} from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";



const Button= ()=> {
    const navigate = useNavigate();
    const irParaLogin = () => {
       navigate("/login");
     };

    
    return (
        <>
            <div className="btn-container">
                <button className="btn" onClick={irParaLogin}>Começar</button>
            </div>
        </>
    );
}

export default Button;