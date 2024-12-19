const C_Provincia = ({ provincia, setProvincia }) => {
    const provincias = ["Bizkaia", "Álava", "Gipuzkoa"]; // Agrega las provincias que estén en el JSON
  
    const handleProvinciaChange = (event) => {
      setProvincia(event.target.value);
    };
  
    return (
      <div>
        <label>Provincia</label>
        <select value={provincia} onChange={handleProvinciaChange}>
          <option value="">Selecciona una provincia</option>
          {provincias.map((prov, index) => (
            <option key={index} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default C_Provincia;
  