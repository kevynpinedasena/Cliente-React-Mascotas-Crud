import React from "react";
import { Nav} from "../../UI/Nav/Nav";
import  LogoPerros  from "../../../images/perros.png"

export const HeaderHome = () => {
    return(
        <>
        <div className="contenedorHeader">
            <div className="contenedorLogoTitu">
                <img src={LogoPerros} alt="perros" className="logo" />
                <h1 className="titulo">Gestion de Mascotas</h1>
            </div>

            <div className="menu">
                <Nav />
            </div>
        </div>
        <hr className="hr"/>
        </>
    )
}