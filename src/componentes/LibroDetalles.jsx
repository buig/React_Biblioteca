import React, { Fragment } from "react";
import "./LibroDetalles.css";
import sin_portada from "../assets/img/sin_portada.png";

const LibroDetalles = (props) => {
  const { titulo, autor, portada, completado, sinopsis } = props.libroBuscado;
  return (
    <Fragment>
      <article className='libro-detalle'>
        <img
          className='libro-detalle__portada'
          src={portada ? portada : sin_portada}
          alt={titulo}
        ></img>
        <div className='libro-detalle__info'>
          <div>
            {completado ? "Leído" : "No leído"}
            <span className='libro-detalle__titulo'>{titulo}</span>
          </div>
          <div className='libro-detalle__autor'>{autor}</div>
          <div className='libro-detalle__sinopsis'>{sinopsis}</div>
        </div>
      </article>
    </Fragment>
  );
};

export default LibroDetalles;
