export default (state = [], action) => {
  switch (action.type) {
    case "SETUP_ANSWERS":
      return action.payload;
    default:
      return state;
  }
};
