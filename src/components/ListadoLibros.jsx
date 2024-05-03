import React, {Fragment} from "react";
import biblioteca from "../assets/db/biblioteca.json"
import Libro from "./Libro";

const ListadoLibros = () => {
    return (
        <Fragment>
            <h2>Listado de libros</h2>

            {Array.isArray(biblioteca.libros) && biblioteca.libros.length ? biblioteca.libros.map((book) => {
                return (
                    <div key={book.id}>
                        <Libro data={book} />
                    </div>
                );
            })
            :
            "No se han encontrado libros."
            }
        </Fragment>
    );
};

export default ListadoLibros;