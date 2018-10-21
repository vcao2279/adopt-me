const breedsReducer = (state = [], action) => {
  if (action.type == "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
};

export default breedsReducer;
