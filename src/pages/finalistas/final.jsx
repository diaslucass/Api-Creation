import { useState, useEffect } from 'react';
import { fetchCBD } from '../../services/api';
import header from "../../components/header"
import "./final.css"
import Header from '../../components/header';

function Final() {
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
            <Header></Header>
            <main>
                <div className="container">
                    {jogos.map(jogo => (
                        <div key={jogo.id} className="jogo">
                            <h2>{jogo.ano}</h2>
                            <p><span>Campeão:</span>  <span>{jogo.campeao} <img src={jogo.imgCampeao} alt="" /></span> </p>
                            <p><span>Vice:</span>   <span>{jogo.vice} <img src={jogo.imgVice} alt="" /></span></p>
                            <p><span>Jogo de Ida:</span> <span>{jogo.jogo_ida}</span></p>
                            <p><span>Jogo de Volta: </span> <span>{jogo.jogo_volta}</span></p>
                            <p><span>Agregado:</span> <span>{jogo.agregado}</span></p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Final;

