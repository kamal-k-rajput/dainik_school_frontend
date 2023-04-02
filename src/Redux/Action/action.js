import { REGISTER_STUDENT } from "./actionTypes";

export const registerStudent = (data) => {
  return {
    type: REGISTER_STUDENT,
    payload: data,
  };
};
