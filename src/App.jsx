import React from "react";
import ListadoLibros from "./componentes/ListadoLibros.jsx";
import "./App.css";
import Header from "./componentes/structure/Header.jsx";
import Nav from "./componentes/structure/Nav.jsx";
import Content from "./componentes/structure/Content.jsx";
import Footer from "./componentes/structure/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </>
  );
};

export default App;
