import React, { Component } from 'react';
import User from './User';

// You can put default value in case provide is not present like code snippet below
// const MyContext = React.createContext("Default Context");
const MyContext = React.createContext();

// You can put above context in one file and then import this context from another file and use here--Architecture Purpose
export default class App extends Component {
  state = {
    name: 'Sachin',
    value: 10
  };

  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.handleClickContext
    };
    return (
      <MyContext.Provider value={contextValue}>
        <User />
      </MyContext.Provider>
    );
  }
}
