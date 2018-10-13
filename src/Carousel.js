import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0 //showing active slide index
  };

  //Automatic update the state everytime the props change
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({ active: +e.target.dataset.index });
  };

  render() {
    const { photos, active } = this.state;
    const carouselPhotos =
      photos.length > 0
        ? photos
        : [{ value: ["http://placecorgi.com/300/300"] }];
    return (
      <div className="carousel">
        <img src={carouselPhotos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
