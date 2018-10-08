import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Happy" animal="Rat" breed="FancyMouse" />
        <Pet name="Oink" animal="Pig" breed="AwesomePig" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
