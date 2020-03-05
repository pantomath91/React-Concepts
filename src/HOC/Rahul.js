import React, { Component } from 'react';
import Army from './withArm';

class Rahul extends Component {
  render() {
    return (
      
    <div>
      <h2>Camp: {this.props.camp}</h2>
      <h3 onMouseOver={()=>{this.props.hocgunshots}}>Rahul {this.props.hochandleGunshots} Gunshots: {this.props.gunshots}</h3>
      {/* console.log(this.props.camp) */}
      </div>
    );
  }
}

export default Army(Rahul,10);
