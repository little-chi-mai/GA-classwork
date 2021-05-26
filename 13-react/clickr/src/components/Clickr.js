import React, {Component} from 'react';

class Clickr extends Component {
  constructor() { // A place to do set up (same as ruby def initialize). A method called automatically once
    super();    // You have to call super
    this.state = {
      clicks: 0    // Put information that will change in state so React can monitor it.
    }
    this._incrementCount = this._incrementCount.bind(this)
  }     // You need this WTF thing

  // Event handlers start with an _ (by convention)
  _incrementCount() {
    this.setState({clicks: this.state.clicks + 1}); // No mutation
  }
  // Render gets called automatically whenever the state changes.
  render() {
    console.log('render()')
    return (
      <button onClick={this._incrementCount}>
        click count: {this.state.clicks}
      </button>
    );
  }
}

export default Clickr;
