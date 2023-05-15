import React, { useState } from "react";
import { IconName, FcTodoList } from "react-icons/fc";
import perro from '../../../images/perro.jpg';

export const ModalDetalle = ( {documento, nombre, edad, peso, altura, foto} ) => {

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
                <div className="modalDetalle">
                    <div className="modal-header">
                        <h2 className="detalleH2">Detalle de Mascotas {nombre}</h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formularioDetalle'>

                            <div className="contenedorImagenDetalle">
                                <img id="imgDetalle" className="imagenDetalle" src={perro} alt="perro" />
                            </div>

                            <div className="contenedorMascotaDetalle">

                                <div className="infoLbel">
                                    <h4>ID</h4>
                                    <label htmlFor="">{documento}</label>
                                </div>

                                <div className="infoLbel">
                                    <h4>Nombre</h4>
                                    <label htmlFor="">{nombre}</label>
                                </div>

                                <div className="infoLbel">
                                    <h4>Edad</h4>
                                    <label htmlFor="">{edad}</label>
                                </div>

                                <div className="infoLbel">
                                    <h4>Peso</h4>
                                    <label htmlFor="">{peso}</label>
                                </div>

                                <div className="infoLbel">
                                    <h4>Altura</h4>
                                    <label htmlFor="">{altura}</label>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}