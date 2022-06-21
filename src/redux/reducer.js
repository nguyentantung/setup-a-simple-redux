const initState = {
  learnclass: [
    {
      id: 1,
      name: "nguyen van a",
      year: "1985",
    },
    {
      id: 2,
      name: "nguyen van b",
      year: "1987",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "class/addStudent":
      return {
        ...state,
        learnclass: [...state.learnclass, action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;
