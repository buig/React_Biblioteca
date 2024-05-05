import React, { Fragment } from "react";
import Libro from "./Libro.jsx";
import coleccion from "../assets/bbdd/biblioteca.json";

const ListadoLibros = () => {
  return (
    <Fragment>
      <h2>Listado de libros</h2>
      {Array.isArray(coleccion.libros) && coleccion.libros.length
        ? coleccion.libros.map((datos_libro) => {
            return <Libro key={datos_libro.id} datos={datos_libro} />;
          })
        : "No se han encontrado libros."}
    </Fragment>
  );
};

export default ListadoLibros;
