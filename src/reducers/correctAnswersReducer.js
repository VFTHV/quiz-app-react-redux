export default (state = 0, action) => {
  switch (action.type) {
    case "ADD_CORRECT_ANSWER":
      return action.payload + 1;
    default:
      return state;
  }
};
