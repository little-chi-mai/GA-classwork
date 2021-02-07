// // ## Recurring Letters
// //
// // Create a function that takes in a sentence and outputs the letter that’s repeated most frequently.
// //
// // ```js
// // recurringLetter('just a simple sentence chilling');
// // // => The recurring letter of "just a simple sentence chilling" is e
// // capitaliseLetter('just a simple sentence chilling', 'e');
// // // => just a simplE sEntEncE chilling
// // ```
// //
// // Use simple sentences with regular spaces between each word (like in the sentence you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..
// //
// // *Hint:* You'll need to loop and count each of the letters.
// //
// // **Bonus:** Create another function that capitalises that letter within the sentence.
// const capLetter = function(string, letter) {
//
//   const lettersArray = string.split('');
//   console.log(lettersArray);
//
//   _.each(lettersArray, function(char, index) {
//     if (char === letter) {
//       lettersArray[index] = char.toUpperCase();
//     }
//   })
// }
//
// const recurringLetter = function (string) {
//   let lettersScore = {};
//   let maxScore = 0;
//   let maxLetter = '';
//
//
//   _(string).each(function(letter) {
//     if (letter !== ' ') {
//       if (lettersScore[letter]) {
//         lettersScore[letter]++;
//         console.log(`Letter ${letter} recurred`)
//       } else {
//         lettersScore[letter] = 1;
//       }
//     }
//     console.log(lettersScore);
//   })
//   // console.log(lettersScore);
//
//   _(lettersScore).each(function(score, letter) {
//     if (score > maxScore) {
//       maxScore = score;
//       maxLetter = letter;
//     }
//   })
//
//   console.log(`The recurring letter of ${string} is ${maxLetter}`);
//   console.log(`The sentence with caps: ${capLetter(string, maxLetter)}`)
// }
//
//
// recurringLetter('just a simple sentence chilling');

function sumArrayOfNums(arr, index = 0, sum = 0) {
  if (index === arr.length) {
    return sum;
  }
  sum += arr[index];
  return sumArrayOfNums(arr, index + 1, sum);
}

console.log(sumArrayOfNums([2, 4, 5, 8]));
