import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-aplicativo.herokuapp.com'
});

export default api;