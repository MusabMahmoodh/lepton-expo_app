import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_LOGIN_FAIL,
  TEACHER_LOGOUT,
  TEACHER_LOGIN_REQUEST,
} from "../actions/types";
import { getAuthAsyncStorage } from "../services/getAuthAsyncStorage";

// const user = async () => await getAuthAsyncStorage();

// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

export default function (state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_LOGIN_REQUEST:
      return {
        isLoggedIn: false,
        loadingLogin: true,
        errorLogging: null,
        loginSuccess: false,
      };
    case TEACHER_LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: payload,
        loadingLogin: false,
        loginSuccess: true,
      };
    case TEACHER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: payload,
        loadingLogin: false,
      };
    case TEACHER_LOGOUT:
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
