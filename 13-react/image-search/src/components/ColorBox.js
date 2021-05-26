import React, { Component } from 'react';

class ColorBox extends Component {
  render() {
    return (
      <div style={ {backgroundColor: this.props.color, width: '10em', height: '10em' } }>
      </div>
    )
  }
}

export default ColorBox;
