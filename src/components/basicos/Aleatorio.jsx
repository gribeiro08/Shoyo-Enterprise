import React from "react";

export default function Aleatorio(props) {
    const { minimo, maximo } = props;
    const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return (
        <div>
            <h2>Número Aleatório entre {minimo} e {maximo}</h2>
            <p>{numeroAleatorio}</p>
        </div>
    )
 
};