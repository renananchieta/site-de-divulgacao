import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

api.defaults.timeout = 50000;

export default api;
