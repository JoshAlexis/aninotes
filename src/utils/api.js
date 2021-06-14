import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aninotesapi.herokuapp.com/api/'
  // baseURL: 'http://localhost:5500/api/'
});

export default api;
