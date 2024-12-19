import React, { useState, useEffect } from "react";
import C_Provincia from "../C_Provincia/C_Provincia";
import C_Municipio from "../C_Municipio/C_Municipio";
import C_Information from "../C_Information/C_Information";

const C_Main = () => {
  const [datos, setDatos] = useState([]); // Aquí se almacenarán los datos del JSON
  const [provincia, setProvincia] = useState("");
  const [municipio, setMunicipio] = useState("");

  // Cargar datos desde el JSON al montar el componente
  useEffect(() => {
    fetch("/espacios-naturales.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        return response.json();
      })
      .then((data) => {
        if (data.item && Array.isArray(data.item)) {
          setDatos(data.item); // Establece los datos como el array dentro de "item"
        } else {
          console.error("El JSON no contiene un array en 'item':", data);
          setDatos([]); // Maneja el error con un array vacío
        }
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);
  
  

  // Filtrar los datos según la provincia seleccionada
  const espaciosFiltrados = Array.isArray(datos)
  ? datos.filter((espacio) => espacio.territory === provincia)
  : [];

  return (
    <main>
      <C_Provincia provincia={provincia} setProvincia={setProvincia} />
      <C_Municipio
        espacios={espaciosFiltrados}
        municipio={municipio}
        setMunicipio={setMunicipio}
      />
      <C_Information
        espacios={espaciosFiltrados}
        municipio={municipio}
      />
    </main>
  );
};

export default C_Main;
