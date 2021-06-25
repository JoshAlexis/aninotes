import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aninotesapi.herokuapp.com/api/'
});

export default api;
