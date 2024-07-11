import { useState, useEffect } from 'react';
import { fetchCBD } from '../../services/api';

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
        <main>
            <div className="container">
                {jogos.map(jogo => (
                    <div key={jogo.id} className="jogo">
                        <h2>{jogo.ano}</h2>
                        <p>Campeão: {jogo.campeao} <img src={jogo.imgCampeao } alt="" /> </p>
                        <p>Vice: {jogo.vice} <img src={jogo.imgVice} alt="" /></p>
                        <p>Jogo de Ida: {jogo.jogo_ida}</p>
                        <p>Jogo de Volta: {jogo.jogo_volta}</p>
                        <p>Agregado: {jogo.agregado}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Final;

