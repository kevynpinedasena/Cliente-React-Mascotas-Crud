import React from "react";
import Facebook from "../../../images/facebook.png";
import GitHub from "../../../images/github.png";
import Instagram from "../../../images/instagram.png";

export const FooterHome = () => {
    return(
        <>
        <hr className="hr"/>
        <div className="contenedorFooter">
            <div className="nombre">
                <h2>😊 Kevyn Pineda</h2>
            </div>
            <div className="contenedorImg">
                <img src={Facebook} alt="facebbok" className="imagenes" />
                <img src={Instagram} alt="instagram" className="imagenes" />
                <img src={GitHub} alt="github" className="imagenes" />
            </div>
        </div>
        </>
    )
}