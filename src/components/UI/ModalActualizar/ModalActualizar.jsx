import React, { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { IconName, FcServices } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";


export const ModalActualizar = ( {documento, nombre, edad, peso, altura, imagen, funcionListaMascotas} ) => {

    let URL = "http://localhost:8080/apis/mascota/";
    const [modal, setModal] = useState(false);

    const [valorDoc, setValorDoc] = useState("");
    const [valorNombre, setValorNombre] = useState("");
    const [valorEdad, setValorEdad] = useState("");
    const [valorPeso, setValorPeso] = useState("");
    const [valorAltura, setValorAltura] = useState("");
    const [valorImagen, setValorImagen] = useState(null);

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

    const informacion = async () => {
        try {
            setValorDoc(documento);
            setValorNombre(nombre);
            setValorEdad(edad);
            setValorPeso(peso);
            setValorAltura(altura);
            // setImagen(imagen);
        } catch (error) {
            console.log(error);
        }
    }

    const info = async () => {
        try {
            setValorDoc(valorDoc);
            setValorNombre(valorNombre);
            setValorEdad(valorEdad);
            setValorPeso(valorPeso);
            setValorAltura(valorAltura);
            setValorImagen(valorImagen);
        } catch (error) {
            console.log(error);
        }
    }

    const limpiar = async () => {
        try {
            informacion();
            cerrarModal();
        } catch (error) {
            console.log(error);
        }
    }

    async function capturarImagen(e){
        const file = e.target.files[0];
        setValorImagen(file);
    }

    const actualizarMascota = async () => {
        try {
            if (valorNombre === "") {
                Swal.fire("Alerta¡","Por Favor Ingrese el nombre de la mascota","info");
            }
            else if (valorEdad === "") {
                Swal.fire("Alerta¡","Por Favor Ingrese la Edad de la mascota","info");
            }
            else if (valorPeso === "") {
                Swal.fire("Alerta¡","Por Favor Ingrese el Peso de la mascota","info");
            }
            else if (valorAltura === "") {
                Swal.fire("Alerta¡","Por Favor Ingrese la Altura de la mascota","info");
            }
            else if (valorImagen === null) {
                Swal.fire("Alerta¡","Por Favor Ingrese la Foto de la mascota","info");
            }
            else{
                const respuesta = await axios.put(URL+documento, {
                    nomMascota: valorNombre,
                    edad: valorEdad,
                    peso: valorPeso,
                    altura: valorAltura,
                    imagenMasc: valorImagen.name
                })
                if (respuesta.status === 201) {
                    Swal.fire("Actualizado Correctamente","La mascota con el ID "+documento+ " Fue Actualizada correctamente","success");
                    limpiar();
                    info();
                    funcionListaMascotas();
                }
                console.log(valorImagen.name);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        informacion();
    },[])

    return(
        <>
        <button className="btn btn22 btn-success" onClick={abrirModal}><FcServices /></button>

        {modal && (
            <div className="modal-overlay">
                <div className="modal2">
                    <div className="modal-header">
                        <h2 className="detalleH2">Actualizar La Mascota: {nombre} </h2>
                        <button className="cerrarModal" onClick={cerrarModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='formulario'>
                            
                            <div className="labelInput">
                                <label htmlFor="" className="label">ID: </label>
                                <Input estilo={"InputLaber"} valor={valorDoc} tipo={"text"} habilitado={"false"} />
                            </div>
        
                            <div className="labelInput">
                                <label htmlFor="" className="label">Nombre: </label>
                                <Input estilo={"InputLaber"} valor={valorNombre} tipo={"text"} 
                                evento={(e) => setValorNombre(e.target.value)}/>
                            </div>

                            <div className="labelInput">
                                <label htmlFor="" className="label">Edad: </label>
                                <Input estilo={"InputLaber"} valor={valorEdad} tipo={"text"} 
                                evento={(e) => setValorEdad(e.target.value.replace(/[^0-9]/g, ''))}/>
                            </div>

                            <div className="labelInput">
                                <label htmlFor="" className="label">Peso: </label>
                                <Input estilo={"InputLaber"} valor={valorPeso} tipo={"text"} 
                                evento={(e) => setValorPeso(e.target.value.replace(/[^0-9]/g, ''))}/>
                            </div>

                            <div className="labelInput">
                                <label htmlFor="" className="label">Altura: </label>
                                <Input estilo={"InputLaber"} valor={valorAltura} tipo={"text"} 
                                evento={(e) => setValorAltura(e.target.value.replace(/[^0-9]/g, ''))}/>
                            </div>

                            <div className="labelInput">
                                <label htmlFor="" className="label">Imagen: </label>
                                <Input estilo={"inputImg"} tipo={"file"} evento={capturarImagen} />
                            </div>

                            
                            <div className="contBtn">
                                <button id='btnGuardar' className='btn btn-success' onClick={actualizarMascota}>Guardar</button>
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