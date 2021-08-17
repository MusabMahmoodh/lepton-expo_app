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
} from "./types";

import TeacherClassService from "../services/teacherClassService";

export const createClass = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_CREATE_CLASS_REQUEST,
    });

    const {
      teacherListClass: { classes },
    } = getState();

    const res = await TeacherClassService.createClass(data);

    dispatch({
      type: TEACHER_CREATE_CLASS_SUCCESS,
      payload: res.data.newClass,
    });
    dispatch({
      type: TEACHER_LIST_CLASSES_SUCCESS,
      payload: [res.data.newClass, ...classes],
    });

    dispatch({
      type: TEACHER_CREATE_CLASS_RESET,
    });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({
      type: TEACHER_CREATE_CLASS_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const retrieveClasses = () => async (dispatch) => {
  try {
    dispatch({ type: TEACHER_LIST_CLASSES_REQUEST });
    const res = await TeacherClassService.getAllClasses();
    dispatch({
      type: TEACHER_LIST_CLASSES_SUCCESS,
      payload: res.data.classes,
    });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({
      type: TEACHER_LIST_CLASSES_FAIL,
      payload: err.response.data.message,
    });
  }
};
export const deleteClass = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_DELETE_CLASS_REQUEST,
    });
    const {
      teacherListClass: { classes },
    } = getState();

    const res = await TeacherClassService.deleteClass(id);
    dispatch({
      type: TEACHER_DELETE_CLASS_SUCCESS,
      payload: res.data.message,
    });
    alert("Deleted success!");
    const updatedClasses = classes.filter((cls) => cls._id !== id);

    dispatch({ type: TEACHER_LIST_CLASSES_SUCCESS, payload: updatedClasses });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({
      type: TEACHER_DELETE_CLASS_FAIL,
      payload: err.response.data.message,
    });
  }
};
// export const getQn = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_QN_REQUEST });
//     const res = await TeacherClassService.getQnById(id);

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

export const updateClass = (id, data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_UPDATE_CLASS_REQUEST,
    });

    const {
      teacherListClass: { classes },
    } = getState();

    const res = await TeacherClassService.updateClass(id, data);

    let newClasses = classes.filter((cls) => cls._id !== id);
    dispatch({
      type: TEACHER_UPDATE_CLASS_SUCCESS,
      payload: res.data.classEdited,
    });
    dispatch({
      type: TEACHER_LIST_CLASSES_SUCCESS,
      payload: [res.data.classEdited, ...newClasses],
    });
    alert("Updated successfully");
    dispatch({
      type: TEACHER_UPDATE_CLASS_RESET,
    });
  } catch (err) {
    alert(err.response.data.message);
    dispatch({
      type: TEACHER_UPDATE_CLASS_FAIL,
      payload: err.response.data.message,
    });
  }
};
