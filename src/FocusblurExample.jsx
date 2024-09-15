import React, { useState } from 'react';

// Exemplo de como lidar com eventos de foco e desfoco
const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false); // Estado para verificar se o input está em foco
  const [inputValue, setInputValue] = useState(''); // Estado para armazenar o valor do input

  const handleFocus = () => {
    setIsFocused(true); // Define que o input está em foco
  };

  const handleBlur = () => {
    setIsFocused(false); // Define que o input perdeu o foco
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Atualiza o valor do input
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>React onFocus and onBlur Example</h2>
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Click or tab to focus"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
      </div>
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;