// Portal are used to show element out of the root div. Sometimes there is requirement to show your element out of main div so for that we need
// create Portals and render out component to that div only.

import React, { Component } from "react";
import Other from "./Other";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>React Portal</h1>
        <Other />
      </div>
    );
  }
}

export default App;
