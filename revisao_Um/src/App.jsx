import './App.css'

function App() {

  function AdivinharNum() {
    let numAleatorio = Math.ceil(Math.random()*10)
    let palpite = Number(prompt("Adivinhe o número secreto"))

    if (numAleatorio == palpite){
      alert("Parabéns, você acertou o número!!")
    }else {
      alert("Tente novamente!!")
    }

    console.log(numAleatorio)
  }

  return (
    <>
      <h1>Exercícios</h1>
        <h3>Exercício 1</h3>
        <button onClick={AdivinharNum}>Adivinhar</button>
    </>
  )
}

export default App
