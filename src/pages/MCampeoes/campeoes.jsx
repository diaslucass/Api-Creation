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
      <header className='cab'>
        <h1>Maiores Vencedores da Copa do Brasil</h1>
        <div className="buttonss">
          <Link to="/" className='btn'>Finalistas</Link>
          <Link to="/campeoes" className="btn btn-primary">Maiores Campeões</Link>
          <Link to="/vices" className="btn btn-sec">Maiores Vices</Link>
        </div>
      </header>

      <main>
        <div className="container2">
          {winners.map(winner => (
            <div key={winner.team} className="winner">
              <h2>{winner.team}</h2>
              <div className="img">
              <img src={winner.img} alt={winner.team} /></div>
              <p id='cont'>Títulos: {winner.wins}</p>
              <p id='cont'>Anos dos títulos:</p>
              <ul>
                {winner.years.map(year => (
                  <li key={year}>{year}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Vencedores;


