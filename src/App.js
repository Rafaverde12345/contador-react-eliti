import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [numero, setNumero] = useState(0)

function agg() {
  setNumero(numero + 1)
  console.log(numero)
}
function mns() {
  setNumero(numero - 1)
  console.log(numero)
}

  return (
    <section>
      <h1>contador</h1>
      <p>{numero}</p>
      <button onClick={agg}>mais</button>
      <button onClick={mns}>menos</button>
    </section>
  );
}

export default App;
