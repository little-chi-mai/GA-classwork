import React, {useState} from 'react';

// hooks: letting functional components have state.
// useState: magical

const Clickr = () => {
  console.log('Click()');

  // call useState for each bit of state you want to keep track of.
  // const stateStuff = useState('hotdogs'); // HOF: High order function
  // console.log(stateStuff); // array: 0, setter fn

  const [clicks, setClicks] = useState(0); // Destructoring
  console.log('clicks', setClicks);

  return(
    <div>
      <button onClick={() => setClicks(clicks + 1)}>{clicks} clicks so far</button>
    </div>
  )
}
//
// class Clickr extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clicks: 0
//     }
//     this._incrementClicks = this._incrementClicks.bind(this);
//   }
//
//   _incrementClicks() {
//     this.setState({clicks: this.state.clicks + 1});
//   }
//
//   render() {
//     return(
//         <div>
//           <button onClick={this._incrementClicks}>{this.state.clicks} clicks so far</button>
//         </div>
//       )
//   }
// }

export default Clickr
