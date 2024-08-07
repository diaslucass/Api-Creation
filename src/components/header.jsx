import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="title">
        <h1 id='title'><img src="copa-do-brasil-logo-1.png" alt="" />Copa do Brasil</h1>
        <h2 id='subtitle'>Venha conhecer todos os finalistas de um dos maiores campeonatos do Brasil</h2>
        <div className="buttons">

          <Link to="/" className='btn'>Finalistas</Link>
          <Link to="/campeoes" className="btn btn-primary">Maiores Campeões</Link>
          <Link to="/vices" className='btn btn-sec'>Maiores Vices</Link>
          
        </div>
      </div>
    </header>
  );
}

export default Header;


