import http from "../http-common";
import { getAuthAsyncStorage } from "./getAuthAsyncStorage";

const getAllClasses = () => {
  return http.get("/questions");
};

const getClassById = (id) => {
  return http.get(`/questions/${id}`);
};

const createClass = (data) => {
  return http.post("/questions", data, { headers: getAuthAsyncStorage() });
};

const updateClass = (id, data) => {
  return http.put(`/questions/${id}`, data, { headers: getAuthAsyncStorage() });
};

const deleteClass = (id) => {
  return http.delete(`/questions/${id}`, { headers: getAuthAsyncStorage() });
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
