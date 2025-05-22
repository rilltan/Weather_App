import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};

  config.params.APPID = "b76c485ab461112dd75fafbdd0334228";
  config.params.units = config.params.units || 'metric';

  return config;
});

export default api;