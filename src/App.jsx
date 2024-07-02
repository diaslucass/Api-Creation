import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <p><img src="copa-do-brasil-logo-1.png" alt="" srcset="" /></p>
        <div className="title">
        <h1 id='title'>Copa do Brasil</h1>
        <h2 id='subtitle'>aaaaaaaaa</h2>
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
