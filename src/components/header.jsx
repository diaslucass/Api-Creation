import './header.css'


function Header() {
  return (
    <header>

      <div className="title">
        <h1 id='title'> <img src="copa-do-brasil-logo-1.png" alt="" srcset="" />Copa do Brasil</h1>
        <h2 id='subtitle'>Venha conhecer todos os finalistas de um dos maiores campeonatos do Brasil </h2>

        <div className="buttons">
          <button className="btn btn-primary">Finalistas</button>
          <button className="btn btn-primary">Maiores Campeões</button>
        </div>
      </div>

    </header>
  )
}

export default Header