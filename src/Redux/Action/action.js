import { REGISTER_STUDENT, SET_TOKEN, USER_DETAILS } from "./actionTypes";

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

export function setUserToken(data) {
  return {
    type: SET_TOKEN,
    payload: data,
  };
}
