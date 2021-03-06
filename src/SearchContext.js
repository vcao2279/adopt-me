import React from "react";

const SearchContext = React.createContext({
  location: "Fullerton, CA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
