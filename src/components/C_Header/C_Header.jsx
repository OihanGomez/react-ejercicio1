import React from "react";

function C_Header() {
  return (
    <header>
      <C_Titulo />
      <C_Nombre />
    </header>
  );
}

function C_Titulo() {
  return <h1>Espacios naturales y playas de Euskadi</h1>;
}

function C_Nombre() {
  return (
    <div>
      <label htmlFor="nombre">Nombre y Apellidos</label>
      <input type="text" id="nombre" placeholder="Nombre y Apellidos" />
    </div>
  );
}

export default C_Header;