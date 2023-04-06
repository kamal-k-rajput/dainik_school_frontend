import { LogIn } from "../../components/Tools/Axios";
import { REGISTER_STUDENT } from "./actionTypes";

export const registerStudent = (data) => {
  return {
    type: REGISTER_STUDENT,
    payload: data,
  };
};

export function getUserDetails() {
  let token = localStorage.getItem("token");
  if (token) {
    LogIn();
  }
}
