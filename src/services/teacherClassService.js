import http from "../http-common";
import { getToken } from "./getAuthAsyncStorage";

const getAllClasses = async () => {
  return http.get("/class", {
    headers: { authorization: await getToken() },
  });
};

const getClassById = (id) => {
  return http.get(`/questions/${id}`);
};

const createClass = async (data) => {
  return http.post("/class", data, {
    headers: { authorization: await getToken() },
  });
};

const updateClass = async (id, data) => {
  return http.put(`/class/${id}`, data, {
    headers: { authorization: await getToken() },
  });
};
const deleteClass = async (id) => {
  return http.delete(`/class/${id}`, {
    headers: { authorization: await getToken() },
  });
};

const TeacherClassService = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
  //   findByTitle,
};

export default TeacherClassService;
