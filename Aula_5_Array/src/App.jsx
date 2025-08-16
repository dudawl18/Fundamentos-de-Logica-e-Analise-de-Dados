import { useState } from 'react'
import './App.css'

function App() {
  const [min, SetMin] = useState([])
  const [max, SetMax] = useState([])
  const [media, SetMedia] = useState([])
  const [mensagem, setMensagem] = useState('')

  function Gerar() {
    let temperaturaMin = []
    let temperaruraMax = []
    let temperaturaMedia = []

    let temperaturaMinDobro = temperaturaMin * 2

    for (let i = 0; i < 30; i++) {

      let numero1 = Math.floor(Math.random() * 24 + 12)
      let numero2 = Math.floor(Math.random() * 24 + 12)

      let mediaTempConta = (numero1 + numero2) / 2

      if (numero1 > numero2) {
        temperaruraMax.push(numero1)
        temperaturaMin.push(numero2)
      } else {
        temperaruraMax.push(numero2)
        temperaturaMin.push(numero1)
      }
      temperaturaMedia.push(mediaTempConta)

      if (temperaruraMax < temperaturaMinDobro) {
        setMensagem("O clã Iluminati está certo 😑")
      }else {
        setMensagem("O clã Iluminati está muito errado!")
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
      <div className='div-central-content'>
        <button onClick={Gerar}>Gerar Número</button>
        <h3>
          {mensagem}
        </h3>


        <div className='temperaturas-div-geral-content'>
          <div>
            <h3>Mínimas (°C)</h3>
            <ul>
              {min.map((minima, index) => (
                <p key={`min-${index}`}>
                  {minima}
                </p>
              ))}
            </ul>
          </div>

          <div>
            <h3>Máximas (°C)</h3>
            <ul>
              {max.map((maxima, index) => (
                <p key={`max-${index}`}>
                  {maxima}
                </p>
              ))}
            </ul>
          </div>

          <div>
            <h3>Média (°C)</h3>
            <ul>
              {media.map((media, index) => (
                <p key={`media-${index}`}>
                  {media}
                </p>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
