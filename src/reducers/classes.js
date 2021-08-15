import {
  TEACHER_LIST_CLASSES_REQUEST,
  TEACHER_LIST_CLASSES_SUCCESS,
  TEACHER_LIST_CLASSES_FAIL,
  TEACHER_CREATE_CLASS_REQUEST,
  TEACHER_CREATE_CLASS_SUCCESS,
  TEACHER_CREATE_CLASS_FAIL,
  TEACHER_CREATE_CLASS_RESET,
  TEACHER_DELETE_CLASS_REQUEST,
  TEACHER_DELETE_CLASS_SUCCESS,
  TEACHER_DELETE_CLASS_FAIL,
  TEACHER_UPDATE_CLASS_REQUEST,
  TEACHER_UPDATE_CLASS_SUCCESS,
  TEACHER_UPDATE_CLASS_FAIL,
  TEACHER_UPDATE_CLASS_RESET,
  TEACHER_GET_CLASS_REQUEST,
  TEACHER_GET_CLASS_SUCCESS,
  TEACHER_GET_CLASS_FAIL,
} from "../actions/types";

const initialClasses = [];
export function teacherListClassesReducer(classes = initialClasses, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_LIST_CLASSES_REQUEST:
      return { loading: true, classes: [], error: null };

    case TEACHER_LIST_CLASSES_SUCCESS:
      return {
        loading: false,
        classes: payload,
      };
    case TEACHER_LIST_CLASSES_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return classes;
  }
}
export function teacherGetClassReducer(currentClass = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_GET_CLASS_REQUEST:
      return { loading: true, currentClass: {}, error: null, success: false };

    case TEACHER_GET_CLASS_SUCCESS:
      return {
        loading: false,
        currentClass: payload,
        success: true,
      };
    case TEACHER_GET_CLASS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return currentClass;
  }
}
export function teacherCreateClassReducer(
  state = { createdClass: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_CREATE_CLASS_REQUEST:
      return { loading: true, createdClass: {}, error: null, success: false };

    case TEACHER_CREATE_CLASS_SUCCESS:
      return {
        loading: false,
        createdClass: payload,
        success: true,
      };
    case TEACHER_CREATE_CLASS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEACHER_CREATE_CLASS_RESET:
      return {
        createdClass: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
export function teacherUpdateClassReducer(
  state = { updatedClass: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_UPDATE_CLASS_REQUEST:
      return { loading: true, updatedClass: {}, error: null, success: false };

    case TEACHER_UPDATE_CLASS_SUCCESS:
      return {
        loading: false,
        updatedClass: payload,
        success: true,
      };
    case TEACHER_UPDATE_CLASS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEACHER_UPDATE_CLASS_RESET:
      return {
        updatedClass: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
export function teacherDeleteClassReducer(deletedClass = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_DELETE_CLASS_REQUEST:
      return { loading: true, deletedClass: {}, error: null, success: false };

    case TEACHER_DELETE_CLASS_SUCCESS:
      return {
        loading: false,
        deletedClass: payload,
        success: true,
      };
    case TEACHER_DELETE_CLASS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return deletedClass;
  }
}
