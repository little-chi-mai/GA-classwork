import React, { Component } from 'react'; // Destructuring

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      height: 100
    }
    this._zoomIn = this._zoomIn.bind(this);
    this._zoomOut = this._zoomOut.bind(this);
  }
  _zoomIn() { //event handler
    //increase the image size (in state)
    this.setState({height: this.state.height + 10});
  }

  _zoomOut() {
    console.log(this)
    if (this.state.height > 10) {
      this.setState({height: this.state.height - 10});
    }
  }

  render() {
    const {name, age, motto, pic} = this.props; // destructuring
    return (
      <div>
        <h2>{name}</h2>
        <h3>{motto}</h3>  {/*this is a comment */}
        <h4>Age: {age}</h4>
        <div>
          <button onClick={this._zoomIn}>+</button>
          <button onClick={this._zoomOut}>-</button>
        </div>
        <img src={pic} alt={name} height={this.state.height}/>
      </div>
    )
  }
}

export default Profile;
