import { REGISTER_STUDENT, USER_DETAILS } from "../Action/actionTypes";

export const studentDetailsReducer = (store, { type, payload }) => {
  switch (type) {
    case REGISTER_STUDENT: {
      return { ...store, studentDetails: payload };
    }
    case USER_DETAILS: {
      console.log(payload, "payload in reducer");
      return { ...store, loggedInUserDetail: payload };
    }
    default:
      return { ...store };
  }
};
