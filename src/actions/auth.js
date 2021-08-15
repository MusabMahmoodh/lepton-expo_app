import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_LOGIN_FAIL,
  TEACHER_LOGOUT,
  TEACHER_LOGIN_REQUEST,
} from "./types";

import { userService } from "../services/userService";
import { setAuthAsyncStorage } from "../services/getAuthAsyncStorage";

export const login = (data) => async (dispatch) => {
  await dispatch({ type: TEACHER_LOGIN_REQUEST });

  try {
    const res = await userService.login(data);
    // console.log(res.data.data);

    await setAuthAsyncStorage(res.data.data);
    dispatch({
      type: TEACHER_LOGIN_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: TEACHER_LOGIN_FAIL,
      payload: err.response.data.message,
    });
  }
};
export const logout = () => (dispatch) => {
  userService.logout();

  dispatch({
    type: TEACHER_LOGOUT,
  });
};
