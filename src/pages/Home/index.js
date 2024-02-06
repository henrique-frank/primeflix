import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import './home.css';

// https://api.themoviedb.org/3/movie/now_playing?api_key={{api_key}}&language=pt-BR


// fetch('../pages/Home/api-key.txt')
// .then(function(response) {
//     console.log(response);
//   return response.text();
// })
// .then(function(data) {
//   var apiKey = data.trim();
//   console.log(apiKey);
// })
// .catch(function(error) {
//   console.error('Erro ao carregar a chave de API.', error);
// });


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "6939aa7648d2f7e9288ea596fe1ae17b"
                    ,
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0,10));
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=> {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
 
export default Home;