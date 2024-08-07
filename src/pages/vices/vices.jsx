import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopVices } from '../../services/api';
import "./vices.css";

const Vices = () => {
    const [vices, setVices] = useState([]);

    useEffect(() => {
        const getVices = async () => {
            const data = await fetchTopVices();
            console.log(data);
            setVices(data);
        };

        getVices();
    }, []);

    return (
        <>
            <header className='cab'>
                <div>
                    <h1>Vice Campeões da Copa do Brasil</h1>
                </div>
                <div className="buttonss">
                <Link to="/" className='btn'>Finalistas</Link>
                <Link to="/campeoes" className="btn btn-primary">Maiores Campeões</Link>
                <Link to="/vices" className="btn btn-sec">Vices</Link>
            </div>
            </header>
            
            <main>
                <div className="container2">
                    {vices.map((vice) => (
                        <div key={vice.vice} className="winner">
                            <h2>{vice.vice}</h2>
                            <div className="img">
                                <img src={vice.escudo} alt={`${vice.vice} escudo`} style={{ width: '50px', height: '50px' }} />
                            </div>
                            <p id='cont'>Contagem: {vice.count} vezes</p>
                            <p id='cont'>Anos:</p>
                            <ul>
                                {vice.anos.map((ano, index) => (
                                    <li key={index}>{ano}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </main>
        </>
    );
};

export default Vices;
