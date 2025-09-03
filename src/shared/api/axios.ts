import axios from "axios";

const api = axios.create({
  baseURL: 'https://670558dd031fd46a830f9fda.mockapi.io',
});

export default api;
