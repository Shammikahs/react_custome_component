import React, { Component } from "react";
import ExampleComponent from "./Common/ExampleComponent";

class MyComponent extends Component {
  constructor(props) {
    super(props);

    //keep your state here for your experimental component
    this.state = {};
  }
  render() {
    return (
      <>
        <ExampleComponent />
      </>
    );
  }
}

export default MyComponent;
