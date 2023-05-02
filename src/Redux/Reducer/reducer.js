import {
  APPLIED_TEACHER_DETAILS,
  REGISTER_STUDENT,
  SET_LOGIN_FLAG,
  SET_TOKEN,
  USER_DETAILS,
} from "../Action/actionTypes";

export const studentDetailsReducer = (store, { type, payload }) => {
  switch (type) {
    case REGISTER_STUDENT: {
      return { ...store, studentDetails: payload };
    }

    case USER_DETAILS: {
      return { ...store, loggedInUserDetail: payload };
    }
    case SET_TOKEN: {
      return { ...store, token: payload };
    }
    case APPLIED_TEACHER_DETAILS: {
      return { ...store, appliedTeacherDetails: payload };
    }
    case SET_LOGIN_FLAG: {
      return { ...store, isLogin: payload };
    }
    default:
      return { ...store };
  }
};
