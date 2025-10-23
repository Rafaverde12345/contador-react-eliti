import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
 
  const [numero,setNumero] = useState(0)

function add() {
  setNumero(numero + 1)
}

  return (
    <div >
      <header className="App-header">
        
        <h1>Contador</h1>
        <p>
          {numero}
        </p>
        <button onClick={add}>agregar</button>
      </header>
    </div>
    
  );
}

export default App;
