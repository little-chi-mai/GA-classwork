// ## Text Soup:
//
// Using HTML, CSS, JavaScript + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// **Hints:**
// - Grab some plain text (~400 words should do) from one the top 100 novels in the public domain at [Project Gutenberg](https://www.gutenberg.org/browse/scores/top); paste the text into a hidden ```<div>``` element in your HTML file, and use jQuery to get the contents of the div.
// - You can also use the index.html file above so you don't waste your time on this warmup :D
//
// **Bonus:**
// - Fade the text in to make it appear, and then fade it out to disappear
// - Try random colours, random font sizes, rotation, whatever floats your boat

const randomNum = function (max) {
  let result;

  result = Math.floor(Math.random() * max);
  console.log(result);
  return result;
}

$(document).ready(function() {
  const words = $('#story').text().split(' ');

  // ~text().trim().split(/\W+/);
  console.log(words);
  const numberOfWords = words.length;

  const randomWord = function () {
    let randomIndex = randomNum(numberOfWords);
    let result = words[randomIndex];
    console.log(result);
    return result;
  }

  randomWord();


  const displayWord = function () {
    let text = $('.random-word').text(randomWord());

    text.fadeIn(50).fadeOut(50);

    text.css({
      font-size: (20 + randomNum(30)) + "px",
      top: randomNum(window.innerHeight) + "px",
      left: randomNum(window.innerWidth) + "px",
    })
  }

  displayWord();

  setInterval(displayWord, 100);

})
