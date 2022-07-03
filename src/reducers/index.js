import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import setupQuizReducer from "./setupQuizReducer";
import changePageReducer from "./changePageReducer";

export default combineReducers({
  categories: categoriesReducer,
  setUpQuiz: setupQuizReducer,
  changePage: changePageReducer,
});
