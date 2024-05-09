import React, { Fragment } from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <Fragment>
            <nav className="menu">
                <ul className="menu__lista">
                    <li className="menu__item"><a className="menu__link">Inicio</a></li>
                    <li className="menu__item"><a className="menu__link">Crear libro</a></li>
                    <li className="menu__item"><a className="menu__link">Buscar libros</a></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Nav;
