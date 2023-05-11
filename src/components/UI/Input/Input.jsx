import React from "react";

export const Input = (  {id, tipo, estilo, valor, placeholder, evento, habilitado} ) => {
    return(
        <input  id={id} type={tipo} className={estilo} value={valor} placeholder={placeholder} onChange={evento} disabled={habilitado}/>
    )
}