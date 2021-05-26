import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: (new Date()).toString()
    }

    // arrow functions do not lose sight by `this`
    setInterval(() => {
      console.log( (new Date()).toString() );
      this.setState({time: (new Date()).toString()})
    }, 1000)
  }

  render() {
    return (
      <h1>
        { this.state.time }
        
      </h1>
    )
  }
}

export default Clock;
