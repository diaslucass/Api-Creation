import { useState, useEffect } from 'react';
import './App.css';
import { fetchTopWinners } from './services/api';

function Winners() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const loadWinners = async () => {
      try {
        const topWinners = await fetchTopWinners();
        setWinners(topWinners);
      } catch (error) {
        console.error("Erro de acesso à API: ", error);
      }
    };
    loadWinners();
  }, []);

  return (
    <>
      <header>
        <h1>Maiores Vencedores da Copa do Brasil</h1>
      </header>
      <main>
        <div className="container">
          {winners.map(winner => (
            <div key={winner.team} className="winner">
              <h2>{winner.team}</h2>
              <p>Títulos: {winner.wins}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Winners;
