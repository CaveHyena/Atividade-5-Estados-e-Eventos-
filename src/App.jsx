import React from 'react';
import './App.css';
import { 
  Title,
  ClickHandlerExample,
  ClickWithTextExample,
  EventTypeExample,
  InputChangeExample,
  KeyDownExample,
  FormSubmitExample,
  SecondComponent,
  FirstComponent
} from './Components.jsx'; 
import FocusBlurExample from './FocusBlurExample.jsx'; 
import { Events } from './Event.jsx'; 




function App() {
  return (
    <div className="App">
      <h1>Atividade 05</h1>
      
      {/* Exemplo 1: Componente Title */}
      <Title />
      
      {/* Exemplo 2: Componente ClickHandlerExample */}
      <ClickHandlerExample />
      
      {/* Exemplo 3: Componente ClickWithTextExample */}
      <ClickWithTextExample />
      
      {/* Exemplo 4: Componente EventTypeExample */}
      <EventTypeExample />
      
      {/* Exemplo 5: Componente InputChangeExample */}
      <InputChangeExample />
      
      {/* Exemplo 6: Componente KeyDownExample */}
      <KeyDownExample />
      
      {/* Exemplo 7: Componente FormSubmitExample */}
      <FormSubmitExample />
      
      {/* Exemplo 8: Componente Events */}
      <Events />
      
      {/* Exemplo 9: Componente FocusBlurExample */}
      <FocusBlurExample />
      
      {/* Exemplo 10: Componente SecondComponent */}
      <SecondComponent />
      
      {/* Exemplo 12: Componente FirstComponent */}
      <FirstComponent />
    </div>
  );
}

export default App;