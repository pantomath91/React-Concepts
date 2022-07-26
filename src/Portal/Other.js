import React, { Component } from "react";
import ReactDOM from "react-dom";

class Other extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Outer Protal</h1>,
      document.getElementById("other-root") // Don't forget to include "other-root" in main HTML file
    );
  }
}

export default Other;
