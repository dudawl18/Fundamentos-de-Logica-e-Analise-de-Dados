import './App.css'

function App() {

  function demonstrarWhile() {
    let cont = 0

    while (cont < 10) {
      console.log(cont);
      cont++   // adiciona mais um
    }

  }

  function revisarWhile() {  // exemplo
    let i = 0          // 1° grande pilar da repetição

    while (i < 10) {  // 2° pilar da repetição   -- quantas vezes quer que repita (condição da repetição)
      // o que vai ser repetido
      i++ // 3º pilar   -- (controle da contagem da repetição)
    }

  }

  function lerValores() {
    let i = 0
    let soma = 0, valor

    while (i < 3) {
      i++
      valor = Number(prompt(` Digite o ${i} valor: `))
      soma += valor   //  += acumulador de valor (soma = soma + valor)

    }
    alert(`Soma:  ${soma}`)
  }

  function demoDoWhile() { // garantir que o valor é positivo
    let valor

    do {
      valor = Number(prompt(`Digite um valor positivo: `))

    } while (valor <= 0) { // só chega aqui se for um valor positivo

      alert(`O valor digitado foi ${valor}`)
    }
  }

  function demoFor() {
    let nDigitado = Number(prompt(`Qual número?`))

    for (let i = 1; i <= 10; i++) {

      console.log(`O valor é ${nDigitado}`)
    }
  }

  // Exercícios

  function consultarPrecos() {

    for (let i = 1; i <= 500; i++) {
      let preco = 0.33
      let total = preco * i

      console.log(i + " = R$" + total.toFixed(2))
    }
  }

  function gerarTabuada() {
    let nDigitado = Number(prompt(`Você quer a tabuada de qual número?`))

    for (let i = 1; i <= 10; i++) {

      let resultado = i * nDigitado
      console.log(i + "x" + nDigitado + "=" + resultado)
    }
  }

  // Extras

  function contarNum(){
    for (let i = 10; i <= 1000; i++) {

      if(i<=500 || i>=900){
        console.log(i)
      }
    }
  }


  return (
    <>

      <h1>Repetições</h1>
      <section>
        <h2>Exemplos</h2>
        <button onClick={demonstrarWhile}>Demo while</button>
        <button onClick={lerValores}>Ler valores</button>
        <button onClick={demoDoWhile}>Do While</button>
        <button onClick={demoFor}>Demo For</button>
      </section>

      <h2>Exercícios do Exercicioverso</h2>
      <section>
        <h3>Exercício 75</h3>
        <button onClick={consultarPrecos}>Xerox</button>
        <h3>Exercício 76</h3>
        <button onClick={gerarTabuada}>Tabuada</button>
        <h2>Extras</h2>
        <h3>Exercícios 7.8</h3>
        <button onClick={contarNum}>Contagem</button>
      </section>
    </>
  )
}

export default App
