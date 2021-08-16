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
} from "./lessons";

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
  teacherDeleteLesson: teacherDeleteLessonReducer,
});

const middleware = [ReduxThunk];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
