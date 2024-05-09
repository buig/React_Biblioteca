import React, { Fragment } from "react";
import ListadoLibros from "../ListadoLibros.jsx";
import "./Content.css";

const Content = () => {
    return (
        <Fragment>
            <main className="main">
                <ListadoLibros />
            </main>
        </Fragment>
    );
};

export default Content;
