import { useState, useEffect } from 'react';
import './App.css';
import { fetchCBD } from './services/api';

function App() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const carregaJogos = async () => {
      try {
        const dadosCDB = await fetchCBD();
        setJogos(dadosCDB);
      } catch (error) {
        console.error("Erro de acesso à API: ", error);
      }
    };
    carregaJogos();
  }, []);

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

          {jogos.map(jogo => (
            <div key={jogo.id} className="jogo">
              <h2>{jogo.ano}</h2>
              <p>Campeão: {jogo.campeao}</p>
              <p>Vice: {jogo.vice}</p>
              <p>Jogo de Ida: {jogo.jogo_ida}</p>
              <p>Jogo de Volta: {jogo.jogo_volta}</p>
              <p>Agregado: {jogo.agregado}</p>
            </div>
          ))}
            
        </div>
      </main>
    </>
  );
}

export default App;
