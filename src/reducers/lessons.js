import {
  TEACHER_LIST_LESSONS_REQUEST,
  TEACHER_LIST_LESSONS_SUCCESS,
  TEACHER_LIST_LESSONS_FAIL,
  TEACHER_CREATE_LESSON_REQUEST,
  TEACHER_CREATE_LESSON_SUCCESS,
  TEACHER_CREATE_LESSON_FAIL,
  TEACHER_CREATE_LESSON_RESET,
  TEACHER_DELETE_LESSON_REQUEST,
  TEACHER_DELETE_LESSON_SUCCESS,
  TEACHER_DELETE_LESSON_FAIL,
  TEACHER_UPDATE_LESSON_REQUEST,
  TEACHER_UPDATE_LESSON_SUCCESS,
  TEACHER_UPDATE_LESSON_FAIL,
  TEACHER_UPDATE_LESSON_RESET,
  TEACHER_ADD_STUDENT_TO_LESSON_REQUEST,
  TEACHER_ADD_STUDENT_TO_LESSON_SUCCESS,
  TEACHER_ADD_STUDENT_TO_LESSON_FAIL,
  // TEACHER_UPDATE_LESSON_RESET,
  TEACHER_GET_LESSON_REQUEST,
  TEACHER_GET_LESSON_SUCCESS,
  TEACHER_GET_LESSON_FAIL,
} from "../actions/types";

const initialLessons = [];
export function teacherListLessonsReducer(lessons = initialLessons, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_LIST_LESSONS_REQUEST:
      return { loading: true, lessons: [], error: null };

    case TEACHER_LIST_LESSONS_SUCCESS:
      return {
        loading: false,
        lessons: payload,
      };
    case TEACHER_LIST_LESSONS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return lessons;
  }
}
export function teacherGetLessonReducer(currentLesson = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_GET_LESSON_REQUEST:
      return {
        loading: true,
        currentLesson: null,
        error: null,
        success: false,
      };

    case TEACHER_GET_LESSON_SUCCESS:
      return {
        loading: false,
        currentLesson: payload,
        success: true,
      };
    case TEACHER_GET_LESSON_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return currentLesson;
  }
}
export function teacherCreateLessonReducer(
  state = { createdLesson: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_CREATE_LESSON_REQUEST:
      return { loading: true, createdLesson: {}, error: null, success: false };

    case TEACHER_CREATE_LESSON_SUCCESS:
      return {
        loading: false,
        createdLesson: payload,
        success: true,
      };
    case TEACHER_CREATE_LESSON_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEACHER_CREATE_LESSON_RESET:
      return {
        createdLesson: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
export function teacherUpdateLessonReducer(
  state = { updatedLesson: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_UPDATE_LESSON_REQUEST:
      return { loading: true, updatedLesson: {}, error: null, success: false };

    case TEACHER_UPDATE_LESSON_SUCCESS:
      return {
        loading: false,
        updatedLesson: payload,
        success: true,
      };
    case TEACHER_UPDATE_LESSON_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case TEACHER_UPDATE_LESSON_RESET:
      return {
        updatedLesson: {},
        error: null,
        success: false,
      };
    default:
      return state;
  }
}
export function teacherAddStudentToLessonReducer(
  state = { updatedLesson: {} },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_ADD_STUDENT_TO_LESSON_REQUEST:
      return { loading: true, updatedLesson: {}, error: null, success: false };

    case TEACHER_ADD_STUDENT_TO_LESSON_SUCCESS:
      return {
        loading: false,
        updatedLesson: payload,
        success: true,
      };
    case TEACHER_ADD_STUDENT_TO_LESSON_FAIL:
      return {
        loading: false,
        error: payload,
      };
    // case TEACHER_ADD_STUDENT_TO_LESSON_RESET:
    //   return {
    //     updatedLesson: {},
    //     error: null,
    //     success: false,
    //   };
    default:
      return state;
  }
}
export function teacherDeleteLessonReducer(deletedLesson = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case TEACHER_DELETE_LESSON_REQUEST:
      return { loading: true, deletedLesson: {}, error: null, success: false };

    case TEACHER_DELETE_LESSON_SUCCESS:
      return {
        loading: false,
        deletedLesson: payload,
        success: true,
      };
    case TEACHER_DELETE_LESSON_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return deletedLesson;
  }
}
