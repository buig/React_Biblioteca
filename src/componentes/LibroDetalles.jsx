import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./LibroDetalles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
 } from "@fortawesome/free-regular-svg-icons";
import sin_portada from "../assets/img/sin_portada.png";

const LibroDetalles = (props) => {
  const { titulo, autor, portada, completado, sinopsis } = props.libroBuscado;

  return (
    <Fragment>
      <article className='libro-detalle'>
        <img
          className='libro-detalle__portada'
          src={portada ? portada : sin_portada}
          alt={titulo ? titulo : "No se ha especificado título."}
        ></img>
        <div className='libro-detalle__info'>
          <div>
            {completado ? 
              <FontAwesomeIcon
                title='Leído'
                icon={faCircleCheck}
                className='libro-detalle__completado libro-detalle__completado--true'
                size='2x'
              /> 
              :
              <FontAwesomeIcon
                title='Leído'
                icon={faCircleXmark}
                className='libro-detalle__completado libro-detalle__completado--false'
                size='2x'
              /> 
            }
            <span className='libro-detalle__titulo'>
              {titulo ? titulo : "No se ha especificado título."}
            </span>
          </div>
          <div className='libro-detalle__autor'>
            {autor ? autor : "No se ha especificado autor."}
          </div>
          <div className='libro-detalle__sinopsis'>
            {sinopsis ? sinopsis : "No se ha especificado sinopsis."}
          </div>
          <Link to={'/rutainexistente'}>
            <input type='button' value='Eliminar de la biblioteca' className='boton boton--cancelar'/>
          </Link>
          <Link to={'/'}>
            <input type='button' value='&lt; Atrás' className='boton boton--volver' />
          </Link>
        </div>
      </article>
    </Fragment>
  );
};

export default LibroDetalles;
