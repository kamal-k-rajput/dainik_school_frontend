import axios from "axios";
const token = JSON.parse(localStorage?.getItem("token")) || "";

const api = axios.create({
  baseURL: "https://api.dainikschool.com/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "x-access-token": token,
    "Access-Control-Allow-Origin": "*",
  },
});
export default api;
// export const
export const logIn = async (data) => api.post("/user/login", data);
export const Register = async (data) => api.post("/user/register", data);
export const createCourseAdmin = async (data) => api.post("/course", data);
export const applyInstructor = async (data) =>
  api.post("/api/apply-instructor", data);

export const getAllTeachersApplication = async (data) =>
  api.get("/api/application");

export const getAllCourse = async (data) => api.get("/course", data);
