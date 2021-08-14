import {
  TEACHER_LIST_CLASSES_REQUEST,
  TEACHER_LIST_CLASSES_SUCCESS,
  TEACHER_LIST_CLASSES_FAIL,
  TEACHER_CREATE_CLASS_REQUEST,
  TEACHER_CREATE_CLASS_SUCCESS,
  TEACHER_CREATE_CLASS_FAIL,
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

export const createQn = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEACHER_CREATE_CLASS_REQUEST,
    });

    const {
      teacherListClasses: { classes },
    } = getState();

    const { data } = await TeacherClassService.createClass(data);
    console.log(data);
    // dispatch({ type: RETRIEVE_QNS_SUCCESS, payload: [newQuestion, ...qns] });

    // dispatch({
    //   type: TEACHER_CREATE_CLASS_SUCCESS,
    //   payload: newQuestion,
    // });
  } catch (err) {
    throw err;
  }
};

// export const retrieveQns = () => async (dispatch) => {
//   try {
//     dispatch({ type: RETRIEVE_QNS_REQUEST });
//     const res = await TeacherClassService.getAllQns();
//     dispatch({
//       type: RETRIEVE_QNS_SUCCESS,
//       payload: res.data.questions,
//     });
//   } catch (err) {
//     console.log(err);
//     dispatch({
//       type: RETRIEVE_QNS_FAIL,
//       payload: err.message,
//     });
//   }
// };
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

// export const deleteQn = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: DELETE_QN_REQUEST,
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

//     await TeacherClassService.removeQn(id, config);
//     dispatch({
//       type: DELETE_QN_SUCCESS,
//       payload: { id },
//     });

//     const updatedQns = qns.filter((qn) => qn._id !== id);

//     dispatch({ type: RETRIEVE_QNS_SUCCESS, payload: updatedQns });
//   } catch (err) {
//     dispatch({
//       type: DELETE_QN_FAIL,
//       payload: err.message,
//     });
//   }
// };
