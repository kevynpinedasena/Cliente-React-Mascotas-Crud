import React, { useState } from "react";
import { IconName, FcTodoList } from "react-icons/fc";

export const ModalDetalle = ( {Documento, nombre, edad, peso, altura, foto} ) => {

    const [modal, setModal] = useState(false);

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

    return(
        <>
        <button className="btn" onClick={abrirModal}><FcTodoList /></button>

        {modal && (
            <div className="modal-overlay">
                <div className="modal2">
                    <div className="modal-header">
                        <h2 className="detalleH2">Detalle de Mascotas {nombre}</h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formulario'>
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}