import { useState, useEffect } from 'react';
import { fetchTopWinners } from '../../services/api';
import { Link } from 'react-router-dom';
import "./campeoes.css"

function Vencedores() {
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
      <div className="buttons">
          <Link to="/">Finalistas</Link>
          <Link to="/campeoes" className="btn btn-primary">Maiores Campeões</Link>
        </div>
      <main>
        <div className="container">
          {winners.map(winner => (
            <div key={winner.team} className="winner">
              <h2>{winner.team}</h2>
              <img src={winner.img} alt="" srcset="" />
              <p>Títulos: {winner.wins}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Vencedores;


