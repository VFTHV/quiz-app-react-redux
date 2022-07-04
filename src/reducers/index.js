import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import setupQuizReducer from "./setupQuizReducer";
import changePageReducer from "./changePageReducer";
import fetchQuizReducer from "./fetchQuizReducer";

export default combineReducers({
  categories: categoriesReducer,
  quizLink: setupQuizReducer,
  pageName: changePageReducer,
  quiz: fetchQuizReducer,
});
