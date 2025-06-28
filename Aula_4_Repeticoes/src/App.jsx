import './App.css'

function App() {
  
  function demonstrarWhile() {

    let cont = 0
    

    while(cont < 10){
      console.log(cont);
      cont++
    }
  }

  return (
    <>
     <h2>Repetições</h2>
      <section>
       <h2>While</h2>
       <button onClick={demonstrarWhile}>Demo while</button>
      </section>
      {/* <section>
    <h2>For</h2>
      </section>
      <section>
       <h2>Do-While </h2>
      </section> */}
    </>
  )
}

export default App
