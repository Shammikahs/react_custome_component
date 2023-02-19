import React from "react";
import ReactDOM from "react-dom";

import MyComponent from "./components/MyComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello TSXers!</h1>
      <p>
        Happy experimenting! Fhelloo ork this by going to{" "}
        <b>File > Fork this Sandbox</b>.
      </p>
      <br />
      <MyComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
