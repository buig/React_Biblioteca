import React, {Fragment} from "react";
import sin_portada from "../assets/img/sin_portada.png";

const Libro = (props) => {
    const data = props.data

    return (
        <Fragment>
            <article id={data.id ? data.id : crypto.randomUUID}>
                <img width='150px' height='225px' src={data.portada ? data.portada : sin_portada} />
                <div>{data.titulo ? data.titulo : "Unknown title"}</div>
                <div>{data.autor ? data.autor : "Unknown author"}</div>
                <div>{data.sinopsis ? data.sinopsis : "Unknown sinopsis"}</div>
                <div>{data.completado ? "Completado" : "En proceso de lectura"}</div>
                <br />
            </article>
        </Fragment>
    );
};

export default Libro;
