import { REGISTER_STUDENT } from "../Action/actionTypes";

export const studentDetailsReducer = (store, { type, payload }) => {
  switch (type) {
    case REGISTER_STUDENT: {
      return { ...store, studentDetails: payload };
    }

    default:
      return { ...store };
  }
};
