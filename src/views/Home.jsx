import Card from '../components/layout/Card'
import PageTitle from '../components/layout/PageTitle'
import React, { useEffect, useState } from 'react';
import './Home.css'

export default () => {
    const [avisos, setAvisos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAvisos = async () => {
            try {
                const response = await fetch("/home");
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();// Aqui pode estar o erro
                setAvisos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchAvisos();
    }, []);
    
    return (
        <div className="Cards">
            <PageTitle title="Avisos Gerais" />
            {loading && <p>Carregando avisos...</p>}
            {error && <p>{`Erro ao carregar avisos: ${error}`}</p>}
            {!loading && !error && avisos.map(aviso => (
                <Card 
                    key={aviso._id} 
                    title={aviso.aviso_title} 
                    content={aviso.aviso_content} 
                    data={aviso.aviso_data} 
                />
            ))}
        </div>
    )
}
