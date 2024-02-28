import { useState, useEffect } from "react";


function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('@primeflix');

        if(tarefasStorage){
            setFilmes(JSON.parse(tarefasStorage))
        }

    },[]);

    useEffect(() => {
        localStorage.setItem('@filme', JSON.stringify(filmes))
    }, [filmes]);

    return (
        <div>
            
            <h1>Lista de favoritos:</h1>   


            <ul>
                {filmes.map( filme => (
                    <li key={filme.title}>{filme.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default Favoritos;