import React from "react";

export const Mascota = ( {mascota = [], listaMascota} ) => {
    return(
        <>
        <div className="contsMascota">
            <table className="table table-hover">
                <thead>
                    <tr>
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
                            <th scope="row">{item.docMascota}</th>
                            <th scope="row">{item.nomMascota}</th>
                            <th scope="row">{item.edad}</th>
                            <th scope="row">{item.peso}</th>
                            <th scope="row">{item.altura}</th>
                         </tr>   
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}