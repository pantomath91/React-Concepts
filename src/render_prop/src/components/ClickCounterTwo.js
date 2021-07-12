
import React, { Component } from 'react'

class ClickCounterTwo extends Component {

    render() {
        const { count, incrementCount } = this.props
        {console.log("incrementCount",incrementCount)}
        {console.log("Count",count)}
        return <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
    }
}

export default ClickCounterTwo