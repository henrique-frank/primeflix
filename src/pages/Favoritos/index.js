import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=> {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

    function removerFilme(id){
        let novaLista = filmes.filter((item) => {
            return(
                item.id !== id
            );
        });

        setFilmes(novaLista);
        localStorage.setItem("@primeflix", JSON.stringify(novaLista));
    }

    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>
            <ul>
                {filmes.map((item) => {
                    return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div className="button-and-link">
                            <Link to={`/filme/${item.id}`}> Ver detalhes </Link>
                            <button onClick={() => removerFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>

    )
} export default Favoritos;