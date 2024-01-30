import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
