import React, { useState } from "react";
import { Input } from "../Input/Input";
import Swal from "sweetalert2";
import axios from "axios";

export const ModalGuardarMascotas = ( {listaMascota} ) => {

    let URL = "http://localhost:8080/apis/mascota";

    const [modal, setModal] = useState(false);
    const [valorDocumento, setValorDocumento] = useState("");
    const [valorNombre, setValorNombre] = useState("");
    const [valorEdad, setValorEdad] = useState("");
    const [valorPeso, setValorPeso] = useState("");
    const [valorAltura, setValorAltura] = useState("");
    const [imagen, setImagen] = useState(null);

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

    async function capturarImagen(e){
        const file = e.target.files[0];
        setImagen(file);
    }

    const guardarMascota = async () =>{
        try {
            console.log(valorDocumento,valorNombre,valorEdad,valorPeso,valorAltura,imagen.name);
            if (valorDocumento === "") {
                Swal.fire("Alerta¡","Por favor Ingrese el ID de la Mascota","info");
            }
            else if (valorNombre === "") {
                Swal.fire("Alerta¡","Por favor Ingrese el Nombre de la Mascota","info");
            }
            else if (valorEdad === "") {
                Swal.fire("Alerta¡","Por favor Ingrese la Edad de la Mascota","info");
            }
            else if (valorPeso === "") {
                Swal.fire("Alerta¡","Por favor Ingrese el Peso de la Mascota","info");
            }
            else if (valorAltura === "") {
                Swal.fire("Alerta¡","Por favor Ingrese la Altura de la Mascota","info");
            }
            else if (imagen === null) {
                Swal.fire("Alerta¡","Por favor Ingrese una Foto de la Mascota","info");
            }
            else{
                const respuesta = await axios.post(URL,{
                    docMascota: valorDocumento,
                    nomMascota: valorNombre,
                    edad: valorEdad,
                    peso: valorPeso,
                    altura: valorAltura,
                    imagenMasc: imagen.name
                })
                if (respuesta.status === 201) {
                    Swal.fire("Guardado Correctamente","Registro Exitoso¡","success");
                    listaMascota();
                    limpiar();
                }
                else{
                    if (respuesta.status === 400) {
                        Swal.fire("Error","Por favor Verifique el ID de la mascota que no exista y que no ingresen campos vacios","success")
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const limpiar = async () =>{
        setValorDocumento("");
        setValorNombre("");
        setValorEdad("");
        setValorPeso("");
        setValorAltura("");
        setImagen(null);
        cerrarModal();
    }

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
                            
                            <Input estilo={"input"} valor={valorDocumento} placeholder={"ID"} tipo={"number"} 
                            evento={(e) => setValorDocumento(e.target.value)}/>

                            <Input estilo={"input"} valor={valorNombre} placeholder={"Nombre"} tipo={"text"}
                            evento={(e) => setValorNombre(e.target.value)} />

                            <Input estilo={"input"} valor={valorEdad} placeholder={"Edad"} tipo={"text"}
                            evento={(e) => setValorEdad(e.target.value)} />

                            <Input estilo={"input"} valor={valorPeso} placeholder={"Peso"} tipo={"text"}
                            evento={(e) => setValorPeso(e.target.value)} />

                            <Input estilo={"input"} valor={valorAltura} placeholder={"Altura"} tipo={"text"}
                            evento={(e) => setValorAltura(e.target.value)} />
                            
                            <Input estilo={"inputImg"} tipo={"file"} evento={capturarImagen} />

                            <div className="contBtn">
                                <button id='btnGuardar' className='btn btn-success' onClick={guardarMascota}>Guardar</button>
                                <button id='btnCancelar' className='btn btn-danger' onClick={limpiar}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}