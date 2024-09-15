import React, { useState } from 'react';

// Exemplo 1: Componente para mostrar uma saudação e alterar o nome ao clicar no botão
export function Title() {
  const [nome, setNome] = useState('Mundo'); // Estado para armazenar o nome

  return (
    <div>
      <h1>Olá {nome}!</h1> {/* Exibe a saudação com o nome atual */}
      <button onClick={() => setNome('José')}>Entrar</button> {/* Altera o nome para 'José' ao clicar */}
    </div>
  );
}

// Exemplo 2: Componente para alterar o nome ao clicar no botão e exibir uma mensagem no console
export function ClickHandlerExample() {
  const [nome, setNome] = useState('Mundo');

  function handleClick(event) {
    setNome('José'); // Altera o nome para 'José'
    console.log("Clicou!"); // Exibe uma mensagem no console
  };

  return (
    <button onClick={handleClick}>Clicar</button> 
  ); {/* Executa a função handleClick ao clicar */}
}

// Exemplo 3: Componente para alterar o nome ao clicar no botão com texto passado como argumento
export function ClickWithTextExample() {
  const [nome, setNome] = useState('Mundo'); // Estado para armazenar o nome

  function handleClick(texto, event) {
    setNome(texto); // Altera o nome para o texto passado como argumento
    console.log("Clicou!"); // Exibe uma mensagem no console
  };

  return (
    <button onClick={(event) => handleClick('José', event)}>
      Clicar
    </button> 
  ); {/* Executa a função handleClick com 'José' e o evento ao clicar */}
}

// Exemplo 4: Componente para mostrar o tipo de elemento clicado
export function EventTypeExample() {
  function handleClick(event) {
    console.log(`Você pressionou um ${event.target.tagName}!`); // Exibe o tipo de elemento clicado
  };

  return (
    <div>
      <div onClick={handleClick}><p>Clique</p></div> {/* Exibe uma mensagem no console ao clicar */}
      <button onClick={handleClick}>Clicar</button> {/* Exibe uma mensagem no console ao clicar */}
    </div>
  );
}

// Exemplo 5: Componente para lidar com mudanças em diferentes tipos de inputs
export function InputChangeExample() {
  function handleChange(event) {
    console.log(`Você mudou para ${event.target.value}!`); // Exibe o valor do input alterado
  };

  return (
    <div>
      <input onChange={handleChange} /> {/* Executa a função handleChange ao alterar o input */}
      <textarea onChange={handleChange} /> {/* Executa a função handleChange ao alterar o text area */}
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select> {/* Executa a função handleChange ao alterar a seleção */}
    </div>
  );
}

// Exemplo 6: Componente para lidar com eventos de tecla pressionada
export function KeyDownExample() {
  function handleKeyDown(event) {
    console.log(`Você acionou a tecla ${event.key}`); // Exibe a tecla pressionada
  }

  return (
    <input onKeyDown={handleKeyDown} /> 
  ); {/* Executa a função handleKeyDown ao pressionar uma tecla */}
}

// Exemplo 7: Componente para lidar com o envio de um formulário
export function FormSubmitExample() {
  function handleSubmit(event) {
    console.log(`Um nome foi enviado: ${event.target[0].value}`); // Exibe o valor do input ao enviar o formulário
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:
        <input type="text" />
      </label>
      <input type="submit" value="Enviar" />
    </form> 
  ); {/* Executa a função handleSubmit ao enviar o formulário */}
}

// Exemplo 10: Componente para exibir uma lista de alunos e ordenar os nomes
export function SecondComponent() {
  const alunos = [
    { nome: 'Ana Santos', matricula: 1578 },
    { nome: 'João Teles', matricula: 2456 },
    { nome: 'Beatriz Seagal', matricula: 4758 }
  ];

  return (
    <div>
      <h1>Lista de alunos</h1>
      {alunos.map(aluno => (
        <p key={aluno.matricula}>
          Nome: {aluno.nome}, Matrícula: {aluno.matricula}
        </p>
      ))}
      <h2>Ordenamento dos elementos</h2>
      <ol>
        {alunos.map(aluno => (
          <li key={aluno.matricula}>{aluno.nome}</li>
        ))}
      </ol>
    </div>
  );
}

// Exemplo 12: Componente para exibir dados pessoais
export function FirstComponent() {
  const nome = "Felipe";
  const sobrenome = "Batista da Silva";
  const matricula = 1237;

  return (
    <div>
      <h1>Dados</h1>
      <p>O meu nome completo é {nome} {sobrenome}, e minha matrícula é {matricula}.</p>
    </div>
  );
}
  