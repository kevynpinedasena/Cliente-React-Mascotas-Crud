import React from "react";
import { ModalDetalle } from "../ModalDetalle/ModalDetalle";
import { IconName, FcTodoList, FcEmptyTrash } from "react-icons/fc";
import axios from "axios";
import Swal from "sweetalert2";
import { ModalActualizar } from "../ModalActualizar/ModalActualizar";

export const Mascota = ( {mascota = [], listaMascota} ) => {

    let URL = "http://localhost:8080/apis/mascota/";

    const eliminar = async (documento) => {
        try {
            const respuesta = await axios.delete(URL + documento)
            if (respuesta.status === 200) {
                Swal.fire("Eliminado Correctamente","La Mascota Fue Eliminada Correctamente","success");
                listaMascota();
            }
            else{
                if (respuesta.status === 404) {
                    Swal.fire("Error","La Mascota con el ID " + documento + " No existe","info");
                }
                else{
                    Swal.fire("Error","Error","error");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <div className="contsMascota">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Detalle</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        mascota.map( (item) => (
                         <tr>
                            <th className="thRes" scope="row"><ModalDetalle documento={item.docMascota} nombre={item.nomMascota} edad={item.edad} peso={item.peso} altura={item.altura} foto={item.imagen}/></th>
                            <th className="thRes" scope="row">{item.docMascota}</th>
                            <th className="thRes" scope="row">{item.nomMascota}</th>
                            <th className="thRes" scope="row">{item.edad}</th>
                            <th className="thRes" scope="row">{item.peso}</th>
                            <th className="thRes" scope="row">{item.altura}</th>
                            <th className="thRes" scope="row"><ModalActualizar documento={item.docMascota} nombre={item.nomMascota} edad={item.edad} peso={item.peso} altura={item.altura} imagen={item.imagen} funcionListaMascotas={listaMascota}/></th>
                            <th className="thRes" scope="row"><button className="btn btn22 btn-danger" onClick={ () => eliminar(item.docMascota)}><FcEmptyTrash /></button></th>
                         </tr>   
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}