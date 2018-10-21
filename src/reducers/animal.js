const animalReducer = (state = "", action) => {
  if (action.type == "SET_ANIMAL") {
    return action.payload;
  } else {
    return state;
  }
};

export default animalReducer;
