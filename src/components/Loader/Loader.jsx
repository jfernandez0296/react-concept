// Loader.js
import React from "react";
import "./Loader.scss"; // Importa el archivo CSS que contiene los estilos del loader

const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
