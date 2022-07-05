import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import setupQuizReducer from "./setupQuizReducer";
import changePageReducer from "./changePageReducer";
import fetchQuizReducer from "./fetchQuizReducer";
import correctAnswersReducer from "./correctAnswersReducer";

export default combineReducers({
  categories: categoriesReducer,
  quizLink: setupQuizReducer,
  pageName: changePageReducer,
  quiz: fetchQuizReducer,
  correctAnswers: correctAnswersReducer,
});
