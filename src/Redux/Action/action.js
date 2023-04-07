import { LogIn } from "../../components/Tools/Axios";
import { REGISTER_STUDENT, USER_DETAILS } from "./actionTypes";

export const registerStudent = (data) => {
  return {
    type: REGISTER_STUDENT,
    payload: data,
  };
};

export function userDetails(data) {
  return {
    type: USER_DETAILS,
    payload: data,
  };
}
