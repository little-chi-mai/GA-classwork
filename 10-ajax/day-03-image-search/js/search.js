'use strict';

var state = {
  nextPage: 1,
  lastPageReached: false
};

var searchFlickr = function searchFlickr(keywords) {
  // console.log('Searching for ', keywords);
  if (state.lastPageReached) {
    return;
  }

  console.log('Lala ' + state);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET/POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json', //this to tell flickr
    page: state.nextPage++,
    per_page: 20
  }).done(showImages).done(function (info) {
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true;
    }
    console.log(info);
    console.log(state);
  });
};

var showImages = function showImages(results) {
  // console.log(results.photos.page);
  state.totalPages = results.photos.pages;
  images = results.photos.photo;
  _(images).each(function (photo) {
    // generate a URL
    var mediumURL = generateURL(photo);
    //generate URL for the photo
    var photoURL = generatePhotoURL(photo);

    var $a = $('<a href="' + photoURL + '" target="_blank"><img src=\'' + mediumURL + '\'></img></a>');
    $a.appendTo('#images');
  });
};

var generateURL = function generateURL(p) {
  return [
    'http://farm', 
    p.farm, 
    '.static.flickr.com/', 
    p.server, 
    '/', 
    p.id, 
    '_', 
    p.secret, 
    '_z.jpg' 
    // TODO: change 'q to sth else for different sizes (see docs)' https://www.flickr.com/services/api/misc.urls.html
  ].join('');
};
// function to generate photo's URL
var generatePhotoURL = function generatePhotoURL(p) {
  return 'https://www.flickr.com/photos/' + p.owner + '/' + p.id;
};

//Function to reset the page
var resetSearch = function resetSearch(newKeywords) {
  state.nextPage = 1;
  state.lastPageReached = false;
  $('#images').empty();
};

$(document).ready(function (event) {

  $('#search').on('submit', function (event) {
    event.preventDefault();
    var searchTerms = $('#query').val();
    // reset the page with new search term
    resetSearch(searchTerms);
    searchFlickr(searchTerms);
  });

  var chillSearchFlickr = _.debounce(searchFlickr, 3000, true);

  // Very twitchy
  $(window).on('scroll', function () {

    //calculate the scrollbottom
    var scrollBottom = $(document).height() - $(document).scrollTop() - $(window).height();
    // console.log(scrollBottom);
    // if the scrollbottom is beneath some threshold
    if (scrollBottom < 500) {
      // console.log('near the bottom');
      var searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms); // getting page 1 again ##TODO: HW
    }
  });
});

// DIVIDE AND CONQUER