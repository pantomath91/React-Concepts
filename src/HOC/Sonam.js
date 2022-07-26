import React, { Component } from 'react';
import Army from './withArm';

class Sonam extends Component {
  render() {
    return (
      <div>
          <h2>{this.props.camp}</h2>
          <h3 onMouseOver={this.props.hocgunshots}>Sonam {this.props.hocgunname} Gunshots: {this.props.hochandleGunshots}</h3>
      {/* console.log(this.props.camp) */}
      </div>
    );
  }
}

export default Army(Sonam,20);