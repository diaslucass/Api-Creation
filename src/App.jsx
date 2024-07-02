import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        
        <div className="title">
        <h1  id='title'> <img src="copa-do-brasil-logo-1.png" alt="" srcset="" />Copa do Brasil</h1>
        <h2 id='subtitle'>Venha conhecer todos os finalistas de um dos maiores campeonatos do Brasil </h2>
        </div>
        
      </header>
      <main>
        <div className="container">
            <p></p>
        </div>
      </main>
    </>
  )
}

export default App
