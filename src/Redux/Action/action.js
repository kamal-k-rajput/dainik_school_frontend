import {
  APPLIED_TEACHER_DETAILS,
  REGISTER_STUDENT,
  SET_LOGIN_FLAG,
  SET_STUDENT_DETAILS,
  SET_TOKEN,
  USER_DETAILS,
} from "./actionTypes";

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

export function setAppliedTeacherDetails(data) {
  return {
    type: APPLIED_TEACHER_DETAILS,
    payload: data,
  };
}

export function setLogInFlag(data) {
  return {
    type: SET_LOGIN_FLAG,
    payload: data,
  };
}

export function setStudentDetails(data) {
  return {
    type: SET_STUDENT_DETAILS,
    payload: data,
  };
}
