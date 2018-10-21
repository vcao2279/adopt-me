const locationReducer = (state = "Fullerton, CA", action) => {
  if (action.type == "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
};

export default locationReducer;
