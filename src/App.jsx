import React from "react";
import ListadoLibros from "./componentes/ListadoLibros.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <div>Mi biblioteca hola</div>
      </header>
      <nav>
        <div>Esta es la barra de navegación.</div>
      </nav>
      <main>
        <section>
          <div>Contenido de la web.</div>
          <div>
            <ListadoLibros />
          </div>
        </section>
      </main>
      <footer>
        <div>
          Curso 24AI32CF029 - Programación reactiva para aplicaciones Web
          (REACT)
        </div>
      </footer>
    </>
  );
};

export default App;
