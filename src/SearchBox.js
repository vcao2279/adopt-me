import React from "react";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
import changeBreed from "./actions/changeBreed";
import changeAnimal from "./actions/changeAnimal";
import changeLocation from "./actions/changeLocation";
import getBreeds from "./actions/getBreeds";

class SearchBox extends React.Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location
            <input
              id="location"
              value={this.props.location}
              placeholder="Location"
              onChange={this.props.handleLocationChange}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={!this.props.breeds.length}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = ({ animal, breed, breeds, location }) => {
  return {
    animal,
    breed,
    breeds,
    location
  };
};

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(SearchBox);
