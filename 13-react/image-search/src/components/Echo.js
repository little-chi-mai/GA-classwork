import React, {Component} from 'react';

class Echo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Initial'
    }
    this._updateMessage = this._updateMessage.bind(this);
    this._clearMessage = this._clearMessage.bind(this);
  }

  _updateMessage(event) {
    console.log(event.target.value);
    this.setState({message: event.target.value});

  };

  _clearMessage() {
    this.setState({message: ''})
  }


  render() {
    return(
      <div>
        <p>{this.state.message || 'something'}</p>
        <input onChange={this._updateMessage} value={this.state.message}/>
        

        <button onClick={this._clearMessage}>
          Clear message
        </button>
      </div>
    )
  }
  
}

export default Echo;