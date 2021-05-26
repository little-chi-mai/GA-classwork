// Class Component
import React from 'react';

class HelloWorld extends React.Component {
  // Every React class component needs a method called render().
  render() { //define a method
    console.log('hello from render()');
    // return the content
    return (
      <h1>Hello World</h1>
    );
  }
}

export default HelloWorld;

