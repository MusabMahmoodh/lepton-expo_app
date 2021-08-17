import http from "../http-common";
import { getToken } from "./getAuthAsyncStorage";

const getAllLessonsOfAClass = async (id) => {
  return http.get(`/lesson/class/${id}`, {
    headers: { authorization: await getToken() },
  });
};

const getLessonById = async (id) => {
  return http.get(`/lesson/${id}`, {
    headers: { authorization: await getToken() },
  });
};

//title and class should be sent--> send class id from params
const createLesson = async (data) => {
  return http.post("/lesson", data, {
    headers: { authorization: await getToken() },
  });
};

const updateLesson = async (id, data) => {
  return http.put(`/lesson/${id}`, data, {
    headers: { authorization: await getToken() },
  });
};
const deleteLesson = async (id) => {
  return http.delete(`/lesson/${id}`, {
    headers: { authorization: await getToken() },
  });
};

const TeacherLessonsService = {
  getAllLessonsOfAClass,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
  //   findByTitle,
};

export default TeacherLessonsService;
