export default (state = "", action) => {
  switch (action.type) {
    case "CHOOSE_CATEGORY":
      return `api/questions?categories=${action.payload}`;
    case "CHOOSE_DIFFICULTY":
      return `${state}$limit=10&difficulty=${action.payload}`;
    default:
      return state;
  }
};
