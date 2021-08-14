import axios from "axios";
import { laptonApi } from "../api/api";

import {
  resetAuthAsyncStorage,
  setAuthAsyncStorage,
} from "./getAuthAsyncStorage";

async function login(contact, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${laptonApi}/teacher`, {
        contact,
        password,
      })
      .then(async (response) => {
        console.log("response", response);
        try {
          await setAuthAsyncStorage(response);
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })
      .catch((err) => {
        console.log(err, "error");
        reject(err);
      });
  });
}

async function logout(getState) {
  await resetAuthAsyncStorage();
}

export const userService = {
  login,
  logout,
};
