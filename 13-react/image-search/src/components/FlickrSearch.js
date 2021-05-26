import React, {Component} from 'react'
import axios from 'axios' // similar to $.getJSON from jQuery
import _ from 'underscore'

import SearchForm from './SearchForm'
import Gallery from './Gallery'


class FlickrSearch extends Component {
  constructor() {
    super();
    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(terms) {
    const generateURL = function (p) {
     return [
       'http://farm',
       p.farm,
       '.static.flickr.com/',
       p.server,
       '/',
       p.id,
       '_',
       p.secret,
       '_q.jpg' // Change 'q' to something else for different sizes (see docs)
     ].join('');
   };

    const flickrURL = 'https://api.flickr.com/services/rest';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: terms,
      format: 'json',
      nojsoncallback: 1 // read the doc for more info
    }
    // with promises, the verb is .then() (not .done())
    axios(flickrURL, { params: flickrParams }).then((results) => {
      console.log(results.data.photos.photo);
      const imagesURLs = _(results.data.photos.photo).map(generateURL); // shorthand to fetch the function with whatever we loop through 
      // console.log(imagesURLs);
      this.setState({images: imagesURLs});
      // console.log(this.state.images);
    });
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={ this.fetchImages }/>
        <Gallery images={ this.state.images }/>
      </div>
    )
  }
}

export default FlickrSearch;

