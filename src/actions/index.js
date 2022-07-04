// import _ from "lodash";
import triviaApi from "../apis/triviaApi";
import convertObjToArray from "./convertObjToArray";

export const fetchCategories = () => async (dispatch) => {
  const response = await triviaApi.get("categories");

  dispatch({
    type: "FETCH_CATEGORIES",
    payload: convertObjToArray(response.data),
  });
};

export const chooseCategory = (path) => {
  return {
    type: "CHOOSE_CATEGORY",
    payload: path,
  };
};

export const chooseDifficulty = (path) => {
  return {
    type: "CHOOSE_DIFFICULTY",
    payload: path,
  };
};

export const changePage = (pageName) => {
  return {
    type: "CHANGE_PAGE",
    payload: pageName,
  };
};

export const fetchQuiz = (quizLink) => async (dispatch) => {
  const response = await triviaApi.get(quizLink);

  dispatch({
    type: "FETCH_QUIZ",
    payload: response.data,
  });
};

// export const fetchQuiz = (quizLink) => (dispatch) => {
//   console.log("fetching quiz with memoize");
//   _fetchQuiz(quizLink, dispatch);
// };

// const _fetchQuiz = _.memoize(async (quizLink, dispatch) => {
//   const response = await triviaApi.get(quizLink);
//   dispatch({
//     type: "FETCH_QUIZ",
//     payload: response.data,
//   });
// });
