import React, { Fragment } from "react";
import sin_portada from "../assets/img/sin_portada.png";

const Libro = (props) => {
  const { portada, titulo, autor, id } = props.datos;

  return (
    <Fragment>
      <article id={id ? id : crypto.randomUUID()}>
        <img
          width='150px'
          height='225px'
          src={portada ? portada : sin_portada}
        ></img>
        <div>{titulo ? titulo : "No se ha especificado título."}</div>
        <div>{autor ? autor : "No se ha especificado autor."}</div>
      </article>
    </Fragment>
  );
};

export default Libro;
