import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./auth";
import {
  teacherListClassesReducer,
  teacherGetClassReducer,
  teacherCreateClassReducer,
  teacherUpdateClassReducer,
  teacherDeleteClassReducer,
} from "./classes";
import {
  teacherListLessonsReducer,
  teacherGetLessonReducer,
  teacherCreateLessonReducer,
  teacherUpdateLessonReducer,
  teacherDeleteLessonReducer,
  teacherAddStudentToLessonReducer,
} from "./lessons";
import {
  teacherListStudentsReducer,
  teacherGetStudentReducer,
  teacherCreateStudentReducer,
  teacherUpdateStudentReducer,
  teacherDeleteStudentReducer,
} from "./students";

const reducers = combineReducers({
  auth: authReducer,
  teacherListClass: teacherListClassesReducer,
  teacherGetClass: teacherGetClassReducer,
  teacherCreateClass: teacherCreateClassReducer,
  teacherUpdateClass: teacherUpdateClassReducer,
  teacherDeleteClass: teacherDeleteClassReducer,
  //
  teacherListLesson: teacherListLessonsReducer,
  teacherGetLesson: teacherGetLessonReducer,
  teacherCreateLesson: teacherCreateLessonReducer,
  teacherUpdateLesson: teacherUpdateLessonReducer,
  teacherAddStudentToLesson: teacherAddStudentToLessonReducer,
  teacherDeleteLesson: teacherDeleteLessonReducer,
  //
  teacherListStudent: teacherListStudentsReducer,
  teacherGetStudent: teacherGetStudentReducer,
  teacherCreateStudent: teacherCreateStudentReducer,
  teacherUpdateStudent: teacherUpdateStudentReducer,
  teacherDeleteStudent: teacherDeleteStudentReducer,
});

const middleware = [ReduxThunk];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
