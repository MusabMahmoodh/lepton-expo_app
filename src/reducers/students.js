import {
  TEACHER_LIST_STUDENTS_REQUEST,
  TEACHER_LIST_STUDENTS_SUCCESS,
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
} from "../actions/types";

const initialStudents = [];
export function teacherListStudentsReducer(students = initialStudents, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_LIST_STUDENTS_REQUEST:
      return { loading: true, students: [], error: null };

    case TEACHER_LIST_STUDENTS_SUCCESS:
      return {
        loading: false,
        students: payload,
      };
    case TEACHER_LIST_STUDENTS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return students;
  }
}
export function teacherGetStudentReducer(currentStudent = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_GET_STUDENT_REQUEST:
      return { loading: true, currentStudent: {}, error: null, success: false };

    case TEACHER_GET_STUDENT_SUCCESS:
      return {
        loading: false,
        currentStudent: payload,
        success: true,
      };
    case TEACHER_GET_STUDENT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return currentStudent;
  }
}
export function teacherCreateStudentReducer(
  state = { createdStudent: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_CREATE_STUDENT_REQUEST:
      return { loading: true, createdStudent: {}, error: null, success: false };

    case TEACHER_CREATE_STUDENT_SUCCESS:
      return {
        loading: false,
        createdStudent: payload,
        success: true,
      };
    case TEACHER_CREATE_STUDENT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEACHER_CREATE_STUDENT_RESET:
      return {
        createdStudent: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
export function teacherUpdateStudentReducer(
  state = { updatedStudent: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_UPDATE_STUDENT_REQUEST:
      return { loading: true, updatedStudent: {}, error: null, success: false };

    case TEACHER_UPDATE_STUDENT_SUCCESS:
      return {
        loading: false,
        updatedStudent: payload,
        success: true,
      };
    case TEACHER_UPDATE_STUDENT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEACHER_UPDATE_STUDENT_RESET:
      return {
        updatedStudent: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
export function teacherDeleteStudentReducer(deletedStudent = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_DELETE_STUDENT_REQUEST:
      return { loading: true, deletedStudent: {}, error: null, success: false };

    case TEACHER_DELETE_STUDENT_SUCCESS:
      return {
        loading: false,
        deletedStudent: payload,
        success: true,
      };
    case TEACHER_DELETE_STUDENT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return deletedStudent;
  }
}
