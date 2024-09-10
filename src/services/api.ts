import axios from 'axios';

const api = axios.create({
    baseURL: !process.env.PRODUCTION ? 'https://wefit-movies.vercel.app/api': process.env.PRODUCTION
});

export default api;