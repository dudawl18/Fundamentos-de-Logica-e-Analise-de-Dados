import { useState } from 'react'
import './App.css'

function App() {
  const [min, SetMin] = useState([])
  const [max, SetMax] = useState([])
  const [media, SetMedia] = useState([])

  function Gerar() {
    let temperaturaMin = min
    let temperaruraMax = max
    let temperaturaMedia = media

    for (let i=0; i<30; i++) {

     let numero1 = Math.floor(Math.random() * 24 + 12)
     let numero2 = Math.floor(Math.random() * 24 + 12)

     let mediaTempConta = (numero1 + numero2) / 2

      if (numero1 > numero2) {
        temperaruraMax.push(numero1)
        temperaturaMin.push(numero2)
        // temperaturaMedia.push(mediaTempConta)
      } else {
        temperaruraMax.push(numero2)
        temperaturaMin.push(numero1)
        // temperaturaMedia.push(mediaTempConta)
      }

    }
    console.table(temperaturaMin)
    console.table(temperaruraMax)
    console.table(temperaturaMedia)

    SetMax(temperaruraMax)
    SetMin(temperaturaMin)
    SetMedia(temperaturaMedia)
    


   
    // sempre arredonda para baixo {0..9}
    // -- Math.floor()

    // sempre arredonda para cima {1..10}
    // -- Math.ceil()

    // sempre arredonda para o inteiro mais próximo {0..10}
    // -- Math.round()
  }


  return (
    <>
      <button onClick={Gerar}>Gerar Número</button>
      {min.length}
      {max.length}
      <div>
        {min.map((minima, index) => {
          <p key={index}>
            {minima}
          </p>
        })}
      </div>
    </>
  )
}

export default App
