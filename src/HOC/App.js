import React, { Component } from 'react';
import Rahul from './Rahul';
import Sonam from './Sonam';

export default class componentName extends Component {
  render() {
    return (
      // camp will be directly access as props under hoc, and not visible inside your Rahul and Sonam components
      // try to see console.log(camp) inside Rahul and Sonam result will be undefined
      <div><Rahul camp="120"/><Sonam camp="140"/> </div>
    );
  }
}
