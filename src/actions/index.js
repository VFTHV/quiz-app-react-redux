import triviaApi from "../apis/triviaApi";

export const fetchCategories = () => async (dispatch) => {
  const response = await triviaApi.get("categories");

  dispatch({ type: "FETCH_CATEGORIES", payload: response });
};
