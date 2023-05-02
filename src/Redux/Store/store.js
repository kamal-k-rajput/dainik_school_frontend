import { legacy_createStore as createStore } from "redux";
import { studentDetailsReducer } from "../Reducer/reducer";

let initialState = {
  studentDetails: {},
  loggedInUserDetail: {},
  token: "",
  appliedTeacherDetails: {},
  isLogin: false,
};

export const store = createStore(studentDetailsReducer, initialState);
