// Asynchronous Javascript And XML
// AJAX AJAH AJAT AJAJ
// xhr

const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (info) {
    $('<p>').text(info.text).appendTo('body');
  })
};

$(function() {
  $('#fetch').on('click', fetchFact);
  fetchFact(); // First fact for free
})

// OLDER VERSION
// const fetchFact = function () {
//   $.ajax('http://numbersapi.com/random/trivia?json', {
//     success: function (info) {
//       $('<p>').text(info.text).appendTo('body');
//     }
//   });
// };

// $('#fetch').on('click', fetchFact);
// fetchFact();

