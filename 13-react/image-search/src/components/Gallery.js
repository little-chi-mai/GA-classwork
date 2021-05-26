import React from 'react'

//Functional components: for when you don't need state:
//this.props becomes simply props (once)
const Gallery = (props) => {

  return (
    <div>
      {props.images.map( (url) => <img key={url} src={url} /> )}
    </div>
  )
}
//
// class Gallery extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Gallery coming soon</h2>
//         <img src="" alt=""/>
//         {this.props.images.forEach((url) => <img src="url"/> }
//      )}
//       </div>
//     )
//   }
// }

export default Gallery;


