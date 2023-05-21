import axios from "axios";
const token = JSON.parse(localStorage?.getItem("token")) || "";

const api = axios.create({
  baseURL: "http://localhost:3000/",
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
export const register = async (data) => api.post("/user/register", data);
export const createCourseAdmin = async (data) => api.post("/course", data);
export const studentList = (data) => api.get("/user/students", data);
export const getMyCourses = (data) => api.get("/subscriptions", data);
export const applyInstructor = async (data) =>
  api.post("/api/apply-instructor", data);

export const getAllTeachersApplication = async (data) =>
  api.get("/api/application");

export const getAllCourse = async (data) => api.get("/course", data);
export const getRedirectURL = async (courseId) =>
  api.get(`/payment/${courseId}`, null);

// export const getRedirectURL = (courseId) =>
//   `http://localhost:3000/payment/${courseId}?token=${token}`;
