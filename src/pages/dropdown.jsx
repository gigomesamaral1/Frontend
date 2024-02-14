import React, { useState } from 'react';


function Dropdown() {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="dropdown">Tipo de Chamado:</label>
        <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Selecione...</option>
          <option value="opcao1">Tecnologia</option>
          <option value="opcao2">Comercial</option>
          <option value="opcao3">Operações</option>
        </select>
      </div>
    );
  }
  
  export default Dropdown;
