const C_Information = ({ espacios, municipio }) => {
    const espacioSeleccionado = espacios.find(
      (espacio) => espacio.municipality === municipio
    );
  
    return (
      <div>
        <h3>Información del Espacio Natural</h3>
        {espacioSeleccionado ? (
          <>
            <p><strong>Nombre:</strong> {espacioSeleccionado.documentName}</p>
            <p><strong>Descripción:</strong> {espacioSeleccionado.turismDescription}</p>
            <p><strong>Teléfono:</strong> {espacioSeleccionado.phone || "No disponible"}</p>
            <p><strong>Dirección:</strong> {espacioSeleccionado.address || "No disponible"}</p>
            <p><strong>Web:</strong> <a href={espacioSeleccionado.web} target="_blank" rel="noopener noreferrer">{espacioSeleccionado.web || "No disponible"}</a></p>
          </>
        ) : (
          <p>Selecciona un municipio para ver la información</p>
        )}
      </div>
    );
  };
  
  export default C_Information;
  