import axios from 'axios';
console.log('현재 API 주소:', import.meta.env.VITE_API_URL);
const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default client;
