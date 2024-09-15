import React, { useState } from 'react';

// Exemplo 8: Componente para demonstrar eventos com funções
export function Events() {
  const handleClick = (e) => {
    console.log(e); // Exibe o objeto do evento no console
    alert("Evento com função!"); // Exibe um alerta ao clicar
  };

  const callNames = () => {
    alert("Testando"); // Exibe um alerta
  };

  return (
    <div>
      <button onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
        Clique Aqui
      </button>
      <div><button onClick={handleClick}>Clique com Função</button></div>
      <div><button onClick={callNames}>Clique com Função</button></div>
    </div>
  );
}

// Exemplo 11: Componente principal que usa outros componentes
import './App.css';
import { FirstComponent, SecondComponent } from './Components.jsx'; // Corrigido para importar do mesmo arquivo

export function App() {
  const [count, setCount] = useState(0); // Estado para contagem (não usado atualmente)

  return (
    <>
      <div className="App"></div>
      <h1>Informação da Pessoa</h1>
      <FirstComponent /> {/* Exibe o componente com dados pessoais */}
      <SecondComponent /> {/* Exibe o componente com a lista de alunos */}
    </>
  );
}