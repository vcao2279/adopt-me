const breedReducer = (state = "", action) => {
  if (action.type == "SET_BREED") {
    return action.payload;
  } else if (action.type == "SET_BREED") {
    return "";
  } else {
    return state;
  }
};

export default breedReducer;
