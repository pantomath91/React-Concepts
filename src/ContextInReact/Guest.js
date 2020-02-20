import React, { Component } from 'react';
import { MyContext } from './App';
class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>\
        <MyContext.Consumer>
          // Consumer child is a function
          {({ data, handleClick }) => (
            <div>
              <h4>
                Name: {data.name} Value:{data.value}
              </h4>
              <button onClick={handleClick}>Change value</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Guest;
