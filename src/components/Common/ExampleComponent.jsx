import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";
const ExampleComponent = props => {
  return (
    <>
      <p>[Your component here]</p>
      <p>Start off with a functional component</p>
    </>
  );
};

ExampleComponent.propTypes = {
  exampleProps: PropTypes.any // https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default ExampleComponent;
