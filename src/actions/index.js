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

export const changePage = (pageName) => {
  return {
    type: "CHANGE_PAGE",
    payload: pageName,
  };
};
