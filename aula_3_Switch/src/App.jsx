import { useState } from 'react'
import './App.css'

function App() {
  const [inputDia, setInputDia] = useState("")

  function executarSwitchTrue() {
    let numero = Number(inputDia)
    switch (true) {
      case numero < 8:
        alert("Dia ok")
        break;

      case numero < 1 || numero > 7:
        alert("Dia ruim")
        break;
    }
  }

  function executarComArray() {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    let dia = (Number(inputDia))
    alert(dias[dia - 1])  // dias é o array e [dia] vai pegar a posição (index)
  }


  function executar() {
    let valor = Number(inputDia)

    switch (valor) {

      case 1:
        alert("Domingo")
        break;

      case 2:
        alert("Segunda-feira")
        break;

      case 3:
        alert("Terça-feira")
        break;

      case 4:
        alert("Quarta-feira")
        break;

      case 5:
        alert("Quinta-feira")
        break;

      case 6:
        alert("Sexta-feira")
        break;

      case 7:
        alert("Sábado")
        break;

      default:
        alert("Digite um valor correto!")

    }

  }


  return (
    <>
      <h2>Aula 3</h2>
      <h3>Switch</h3>
      <div className="input-button-content">
      <input type="text"
        value={inputDia}
        onChange={(e) => setInputDia(e.target.value)}
      />
      <button onClick={executar}>Executar</button>
      <button onClick={executarComArray}>Executar com array</button>
      <button onClick={executarSwitchTrue}>Executar com switch true</button>
      </div>
      
    </>
  )
}

export default App
