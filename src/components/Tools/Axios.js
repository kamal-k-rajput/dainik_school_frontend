import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
export default api;
// export const
export const logIn = (data) => api.post("/user/login", data);
export const Register = (data) => api.post("/user/register", data);
