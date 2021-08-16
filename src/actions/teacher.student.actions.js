import {
  TEACHER_LIST_STUDENTS_SUCCESS,
  TEACHER_LIST_STUDENTS_REQUEST,
  TEACHER_LIST_STUDENTS_FAIL,
  TEACHER_CREATE_STUDENT_REQUEST,
  TEACHER_CREATE_STUDENT_SUCCESS,
  TEACHER_CREATE_STUDENT_FAIL,
  TEACHER_CREATE_STUDENT_RESET,
  TEACHER_DELETE_STUDENT_REQUEST,
  TEACHER_DELETE_STUDENT_SUCCESS,
  TEACHER_DELETE_STUDENT_FAIL,
  TEACHER_UPDATE_STUDENT_REQUEST,
  TEACHER_UPDATE_STUDENT_SUCCESS,
  TEACHER_UPDATE_STUDENT_FAIL,
  TEACHER_UPDATE_STUDENT_RESET,
  TEACHER_GET_STUDENT_REQUEST,
  TEACHER_GET_STUDENT_SUCCESS,
  TEACHER_GET_STUDENT_FAIL,
} from "./types";

import TeacherStudentService from "../services/teacherStudentService";

export const createStudent = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_CREATE_STUDENT_REQUEST,
    });

    const {
      teacherListStudent: { students },
    } = getState();

    const res = await TeacherStudentService.createStudent(data);

    dispatch({
      type: TEACHER_CREATE_STUDENT_SUCCESS,
      payload: res.data.newStudent,
    });

    dispatch({
      type: TEACHER_LIST_STUDENTS_SUCCESS,
      payload: [res.data.newStudent, ...students],
    });

    dispatch({
      type: TEACHER_CREATE_STUDENT_RESET,
    });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({
      type: TEACHER_CREATE_STUDENT_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const retrieveStudents = () => async (dispatch) => {
  try {
    dispatch({ type: TEACHER_LIST_STUDENTS_REQUEST });
    const res = await TeacherStudentService.getAllStudentsOfATeacher();
    dispatch({
      type: TEACHER_LIST_STUDENTS_SUCCESS,
      payload: res.data.students,
    });
  } catch (err) {
    dispatch({
      type: TEACHER_LIST_STUDENTS_FAIL,
      payload: err.response.data.message,
    });
  }
};
export const deleteStudent = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_DELETE_STUDENT_REQUEST,
    });
    const {
      teacherListStudent: { students },
    } = getState();

    const res = await TeacherStudentService.deleteStudent(id);
    dispatch({
      type: TEACHER_DELETE_STUDENT_SUCCESS,
      payload: res.data.message,
    });
    alert("Deleted success!");
    const updatedStudents = students.filter((std) => std._id !== id);

    dispatch({ type: TEACHER_LIST_STUDENTS_SUCCESS, payload: updatedStudents });
  } catch (err) {
    alert(err);
    dispatch({
      type: TEACHER_DELETE_STUDENT_FAIL,
      payload: err.response.data.message,
    });
  }
};
// export const getQn = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_QN_REQUEST });
//     const res = await TeacherStudentService.getQnById(id);

//     dispatch({
//       type: GET_QN_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//     dispatch({
//       type: GET_QN_FAIL,
//       payload: err.message,
//     });
//   }
// };

export const updateStudent = (id, data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_UPDATE_STUDENT_REQUEST,
    });

    const {
      teacherListStudent: { students },
    } = getState();

    const res = await TeacherStudentService.updateStudent(id, data);

    let newStudents = students.filter((std) => std._id !== id);
    dispatch({
      type: TEACHER_UPDATE_STUDENT_SUCCESS,
      payload: res.data.StudentEdited,
    });
    dispatch({
      type: TEACHER_LIST_STUDENT_SUCCESS,
      payload: [res.data.StudentEdited, ...newStudents],
    });
    alert("Updated successfully");
    dispatch({
      type: TEACHER_UPDATE_STUDENT_RESET,
    });
  } catch (err) {
    dispatch({
      type: TEACHER_UPDATE_STUDENT_FAIL,
      payload: err.response.data.message,
    });
  }
};
