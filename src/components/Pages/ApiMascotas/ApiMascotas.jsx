import axios from "axios";
import React, { useEffect, useState } from "react";
import { Mascota } from "../../UI/Mascotas/Mascotas";
import { Input } from "../../UI/Input/Input";

export const ApiMascotas = () => {

    let URL = "http://localhost:8080/apis/mascota";

    const [modal, setModal] = useState(false);
    const [mascota, setMascota] = useState([]);

    const [valorDocumento, setValorDocumento] = useState("");

    async function abrirModal(){
        try {
            setModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    async function cerrarModal(){
        try {
            setModal(false);
        } catch (error) {
            console.log(error);
        }
    }

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
        <button className="btn btn-success" onClick={abrirModal}> Registrar Mascotas </button>

        {modal && (
            <div className="modal-overlay">
                <div className="modal2">
                    <div className="modal-header">
                        <h2>Registro de Mascotas</h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formulario'>
                            
                            <Input estilo={"input"} valor={valorDocumento} placeholder={"Documento"} tipo={"number"} 
                            evento={(e) => setValorDocumento(e.target.value)}/>
                            
                            <div className="contBtn">
                                {/* <button id='btnGuardar' className='btn btn-success' onClick={guardarUsuario}>Guardar</button>
                                <button id='btnCancelar' className='btn btn-danger' onClick={limpiar}>Cancelar</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <div className="gestionMascota">
            <div className="contTabla">
                <Mascota mascota={mascota} listaMascota={listaMascotas}/>
            </div>
        </div>
        </>
    )
}