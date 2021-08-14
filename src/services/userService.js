import axios from "axios";
import { laptonApi } from "../api/api";

import { resetAuthAsyncStorage } from "./getAuthAsyncStorage";
import http from "../http-common";
const login = (data) => {
  return http.post(`${laptonApi}/teacher/auth`, data);
};

async function logout() {
  await resetAuthAsyncStorage();
}

export const userService = {
  login,
  logout,
};
