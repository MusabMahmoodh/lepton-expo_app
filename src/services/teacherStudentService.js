import http from "../http-common";
import { getToken } from "./getAuthAsyncStorage";

const getAllStudentsOfATeacher = async (id) => {
  return http.get(`/student`, {
    headers: { authorization: await getToken() },
  });
};

const getStudentById = (id) => {
  return http.get(`/questions/${id}`);
};

//title and class should be sent--> send class id from params
const createStudent = async (data) => {
  return http.post("/student", data, {
    headers: { authorization: await getToken() },
  });
};

const updateStudent = async (id, data) => {
  return http.put(`/student/${id}`, data, {
    headers: { authorization: await getToken() },
  });
};
const deleteStudent = async (id) => {
  return http.delete(`/student/${id}`, {
    headers: { authorization: await getToken() },
  });
};

const TeacherStudentsService = {
  getAllStudentsOfATeacher,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  //   findByTitle,
};

export default TeacherStudentsService;
