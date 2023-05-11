import React from "react";
import { ModalDetalle } from "../ModalDetalle/ModalDetalle";
import { IconName, FcTodoList, FcEmptyTrash } from "react-icons/fc";
import axios from "axios";
import Swal from "sweetalert2";

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
                            <th scope="row"><ModalDetalle Documento={item.docMascota} nombre={item.nomMascota}/></th>
                            <th scope="row">{item.docMascota}</th>
                            <th scope="row">{item.nomMascota}</th>
                            <th scope="row">{item.edad}</th>
                            <th scope="row">{item.peso}</th>
                            <th scope="row">{item.altura}</th>
                            <th scope="row">ac</th>
                            <th scope="row"><button className="btn" onClick={ () => eliminar(item.docMascota)}><FcEmptyTrash width={"20px"}/></button></th>
                         </tr>   
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}