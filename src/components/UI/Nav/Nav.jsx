import React from "react";
import { Ancla } from "../Ancla/Ancla";

export const Nav = () => {
    return(
        <nav>
            <Ancla style="ancla" references="./Principal" textAncla="Principal"></Ancla>
            <Ancla style="ancla" references="./ApiMascotas" textAncla="Api Mascota"></Ancla>
        </nav>
    )
}