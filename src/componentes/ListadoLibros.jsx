import React, { Fragment } from "react";
import Libro from "./Libro.jsx";
import coleccion from "../assets/bbdd/biblioteca.json";
import "./ListadoLibros.css";

const ListadoLibros = () => {
  return (
    <Fragment>
      <section className='seccion'>
        {Array.isArray(coleccion.libros) && coleccion.libros.length
          ? coleccion.libros.map((datos_libro) => {
              return <Libro key={datos_libro.id} datos={datos_libro} />;
            })
          : "No se han encontrado libros."}
      </section>
    </Fragment>
  );
};

export default ListadoLibros;
