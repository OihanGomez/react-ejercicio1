const C_Municipio = ({ espacios, municipio, setMunicipio }) => {
    const municipios = [...new Set(espacios.map((espacio) => espacio.municipality))];
  
    const handleMunicipioChange = (event) => {
      setMunicipio(event.target.value);
    };
  
    return (
      <div>
        <label>Municipio</label>
        <select value={municipio} onChange={handleMunicipioChange}>
          <option value="">Selecciona un municipio</option>
          {municipios.map((mun, index) => (
            <option key={index} value={mun}>
              {mun}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default C_Municipio;
  