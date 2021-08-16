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
  TEACHER_GET_LESSON_REQUEST,
  TEACHER_GET_LESSON_SUCCESS,
  TEACHER_GET_LESSON_FAIL,
} from "./types";

import TeacherLessonService from "../services/teacherLessonService";

export const createLesson = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_CREATE_LESSON_REQUEST,
    });

    const {
      teacherListLesson: { lessons },
    } = getState();

    const res = await TeacherLessonService.createLesson(data);

    dispatch({
      type: TEACHER_CREATE_LESSON_SUCCESS,
      payload: res.data.newLesson,
    });
    dispatch({
      type: TEACHER_LIST_LESSONS_SUCCESS,
      payload: [res.data.newLesson, ...lessons],
    });

    dispatch({
      type: TEACHER_CREATE_LESSON_RESET,
    });
  } catch (err) {
    alert(err);
    dispatch({
      type: TEACHER_CREATE_LESSON_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const retrieveLessons = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEACHER_LIST_LESSONS_REQUEST });
    const res = await TeacherLessonService.getAllLessonsOfAClass(id);

    dispatch({
      type: TEACHER_LIST_LESSONS_SUCCESS,
      payload: res.data.lessons,
    });
  } catch (err) {
    dispatch({
      type: TEACHER_LIST_LESSONS_FAIL,
      payload: err.response.data.message,
    });
  }
};
export const deleteLesson = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_DELETE_LESSON_REQUEST,
    });
    const {
      teacherListLesson: { lessons },
    } = getState();

    const res = await TeacherLessonService.deleteLesson(id);
    dispatch({
      type: TEACHER_DELETE_LESSON_SUCCESS,
      payload: res.data.message,
    });
    alert("Deleted success!");
    const updatedLessons = lessons.filter((lsn) => lsn._id !== id);

    dispatch({ type: TEACHER_LIST_LESSONS_SUCCESS, payload: updatedLessons });
  } catch (err) {
    alert(err);
    dispatch({
      type: TEACHER_DELETE_LESSON_FAIL,
      payload: err.response.data.message,
    });
  }
};
// // export const getQn = (id) => async (dispatch) => {
// //   try {
// //     dispatch({ type: GET_QN_REQUEST });
// //     const res = await TeacherLessonService.getQnById(id);

// //     dispatch({
// //       type: GET_QN_SUCCESS,
// //       payload: res.data,
// //     });
// //   } catch (err) {
// //     console.log(err);
// //     dispatch({
// //       type: GET_QN_FAIL,
// //       payload: err.message,
// //     });
// //   }
// // };

// export const updateClass = (id, data) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: TEACHER_UPDATE_LESSON_REQUEST,
//     });

//     const {
//       teacherListClass: { classes },
//     } = getState();

//     const res = await TeacherLessonService.updateClass(id, data);

//     let newClasses = classes.filter((lsn) => cls._id !== id);
//     dispatch({
//       type: TEACHER_UPDATE_LESSON_SUCCESS,
//       payload: res.data.classEdited,
//     });
//     dispatch({
//       type: TEACHER_LIST_LESSONS_SUCCESS,
//       payload: [res.data.classEdited, ...newClasses],
//     });
//     alert("Updated successfully");
//     dispatch({
//       type: TEACHER_UPDATE_LESSON_RESET,
//     });
//   } catch (err) {
//     dispatch({
//       type: TEACHER_UPDATE_LESSON_FAIL,
//       payload: err.response.data.message,
//     });
//   }
// };