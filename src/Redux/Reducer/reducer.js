import {
  REGISTER_STUDENT,
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
    default:
      return { ...store };
  }
};
