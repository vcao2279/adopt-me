import { render } from "react-dom";
import React from "react";
import Results from "./Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
