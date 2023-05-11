import axios from "axios";
import React, { useEffect, useState } from "react";
import { Mascota } from "../../UI/Mascotas/Mascotas";
import { Input } from "../../UI/Input/Input";
import { ModalGuardarMascotas } from "../../UI/ModalGuardarMascotas/ModalGuardarMascotas";

export const ApiMascotas = () => {

    let URL = "http://localhost:8080/apis/mascota";
    const [mascota, setMascota] = useState([]);

    async function listaMascotas(){
        try {
            const respuesta = await axios.get(URL)
            setMascota(respuesta.data) 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        listaMascotas();
    },[])

    return(
        <>
        <ModalGuardarMascotas listaMascota={listaMascotas}/>
       
        <div className="gestionMascota">
            <div className="contTabla">
                <Mascota mascota={mascota} listaMascota={listaMascotas}/>
            </div>
        </div>
        </>
    )
}