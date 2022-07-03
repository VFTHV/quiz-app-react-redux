export default (state = "", action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return action.payload;
    default:
      return state;
  }
};
