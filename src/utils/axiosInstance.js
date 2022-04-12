import axios from "axios";
const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "https://api.oopacks.com/api/",
  headers: { Authorization: `Bearer ${token}` },
});


axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearerasd ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export { instance };
