import { useState } from 'react'
import './App.css'

function App() {
  const produtos = [
    {
      id: 0,
      nome: 'Quadro azul',
      preco: 10,
      preco_promocao: 0,
      antigo: false
    },
    {
      id: 1,
      nome: 'Escultura verde',
      preco: 45,
      preco_promocao: 0,
      antigo: false,
    },
    {
      id: 2,
      nome: 'Porcelana branca',
      preco: 5,
      preco_promocao: 0,
      antigo: true,
    },
    {
      id: 3,
      nome: 'Boneca de Cristal',
      preco: 20,
      preco_promocao: 0,
      antigo: true,
    },
  ]


  return (
    <>
      <div className='container'>
        <table>
          <thead>
            <tr className='tableRow'>
              <td>Nome</td>
              <td>Preço</td>
              <td>Preço Promocional</td>
              <td>Status</td>
            </tr>
          </thead>

          {produtos.map(produtos => (
              <tbody>
                <tr className='tableRowBody' key={produtos.id} >
                  <td>{produtos.nome}</td>
                  <td>{produtos.preco}</td>
                  <td>{produtos.preco_promocao}</td>
                  <td>{produtos.antigo == true ? "True" : "False"}</td>
                </tr>
              </tbody>
            ))}

        </table>
      </div>
    </>
  )
}

export default App
