import axios from 'axios';

const api = axios.create({
    baseURL: !process.env.PRODUCTION ? 'http://localhost:3333/' : process.env.API_URL,
});

export default api;
