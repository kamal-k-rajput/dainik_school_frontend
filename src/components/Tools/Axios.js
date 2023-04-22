import axios from "axios";
let token = JSON.parse(localStorage.getItem("token"));

const api = axios.create({
  baseURL: "http://3.110.254.213/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "x-access-token": token,
  },
});
export default api;
// export const
export const logIn = (data) => api.post("/user/login", data);
export const Register = (data) => api.post("/user/register", data);
export const createCourseAdmin = (data) => api.post("/course", data);
export const getAllCourse = (data) => api.get("/course", data);
