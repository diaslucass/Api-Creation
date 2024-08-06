import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./curiosidade.css"

function Curiosidades(){




return(
    <>
    <header>
    <div id='cabecalho'>    
        <h1>Curiosidades da Copa do Brasil</h1>
        <h2>"Descubra o que move a paixão: curiosidades da Copa do Brasil!"</h2>
    </div> 
    </header>
    <div className="buttons">
          <Link to="/" className='btn'>Finalistas</Link>
          <Link to="/campeoes" className="btn btn-primary">Maiores Campeões</Link>
          <Link to="/curiosidades" className="btn btn-sec">Curiosidades</Link>
        </div>
    <main>
       <div className='container'>
           <div id='todas-curiosidades'>
                <h1>{/* https://www.sambafoot.com/br/noticias/copa-do-brasil-10-curiosidades-sobre-o-segundo-maior-torneio-do-pais */}</h1> 
                
           </div>
        </div> 
    </main>    
    
    </>
);
}
export default Curiosidades;