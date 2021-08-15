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
    alert(err);
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
    alert(err);
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

// export const updateQn = (id, data) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: UPDATE_QN_REQUEST,
//     });

//     const {
//       auth: { user },
//       listQns: { qns },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     const res = await TeacherClassService.updateQn(id, data, config);

//     let newArr = qns.filter((qn) => qn._id !== id);
//     dispatch({ type: RETRIEVE_QNS_SUCCESS, payload: [data, ...newArr] });

//     dispatch({
//       type: UPDATE_QN_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: UPDATE_QN_FAIL,
//       payload: err.message,
//     });
//   }
// };
