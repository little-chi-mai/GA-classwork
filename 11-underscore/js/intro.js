
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Each loop for arrays
// eq to forEach

_(nums).each(function(item, index, theWholeArray) {
  // console.log(`Item: ${item}; Index: ${index}; The whole array: ${theWholeArray}`);
})


///// each loop for an object

const sales = { Feb: 95, Mar: 105}

_(sales).each(function(total, month) {
  // console.log(`${total} sales in ${month}`);
})

///////// .map

const byNineteen = function (n) {
  return n * 19;
}

const result = _(nums).map(byNineteen);


// .map with objects ////////////////////////
const salesInfo = _(sales).map(function (total, month) {
  return `${month} has ${total} sales.`
})

// .reduce() /////////////////////////////////
const total = _(nums).reduce(function (runningTotal, n) {
  // console.log(`runningTotal: ${runningTotal}, n: ${n}, returning: ${runningTotal + n}`)
  return runningTotal + n;
})

// console.log(total);

// .reduce() also works for objects ///////////////////////////


// .find() - find the first value ///////////////////////////
const divisibleByFive = function (candidate) {
  // console.log(`Considering: ${candidate}, returning: ${candidate % 5 === 0}`)
  return candidate % 5 === 0
}

const firstMultipleOfFive = _(nums).find(divisibleByFive); //find the thing return true
// console.log(firstMultipleOfFive);


// .filter() ---- find all of them ///////////////////////

const allMultipleOfFive = _(nums).filter(divisibleByFive);
// console.log(allMultipleOfFive);


// .reject()-- find all except the one return true

const notDivisibleByFive = _(nums).reject(divisibleByFive);
// console.log(notDivisibleByFive);

// .pluck() //////////////

const bros = [
  {name: 'Mai', instrument: 'guitar', disposition: 'surly'},
  {name: 'Lan', instrument: 'harp', disposition: 'sweet'},
  {name: 'Giap', instrument: 'piano', disposition: 'sleazy'}
];

// console.log(_(bros).pluck('disposition'));
//
//
// # Collections!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//

//
//
// ## Remember!
//
// You have the [documentation!](https://underscorejs.org/)

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// - Iterate through ` numbers ` and log each number to the console

_(numbers).each(function(n) {
  // console.log(`Number: ${n}`);
})
// - Iterate through ` numbers ` and multiply each one of them by 5
// _(numbers).each(function(n) {
//   console.log( n * 5 );
// })
const fives = _(numbers).map(function(n) {
  return n * 5;
})
// console.log(fives);
// - Iterate through ` numbers ` and reduce it by adding them together
const sum = _(numbers).reduce(function(runningTotal, n) {
  return runningTotal + n;
})

// console.log(`Sum: ${sum}`);

const add = function (a, b) {
  return a + b;
};

const sum1 = _(numbers).reduce(add);
// console.log(sum1);

// - Get an array of all of the people in ` people ` that have the username "E"
// const usernameE = _(people).filter(function(user) {
//   return user['username'] === 'E';
// })

const usernameE1 = _(people).where({username: 'E'}); // where returns an array
// console.table(usernameE1);
// - Find the first object in ` people ` that has the id of 3
// const firstId3 = _(people).find(function(user) {
//   return user['id'] === 3;
// })
const user3 = _(people).findWhere({id: 3}); // returns a single object

// console.log(user3);
// - Find the first person who has an age of less than 50
const firstAgeLessThan50 = _(people).find(function(user) {
  return user['age'] < 50;
})
// console.log(firstAgeLessThan50);
// - Get an array of all of the people with an age of over 60
const allAgeOver60 = _(people).filter(function(user) {
  return user['age'] > 60;
})
// console.log(allAgeOver60);
// - Remove all of the people with an age less than 40
const ageLessThan40 = _(people).reject(function(user) {
  return user['age'] < 40;
})
// console.log(ageLessThan40);


// # Collections!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];
//
var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule", 'ABcd'
]; // Random words from here... http://www.catb.org/jargon/html/go01.html
// ```
//
// ## Exercises
//
// - Sort the ` people ` by 'uid'
const sortedByUid = _.sortBy(people, 'uid');
console.table(sortedByUid);

// - Group the random words by the lower case version of their first letter
const grouped = _.groupBy(words, function(word) {
  return word[0].toLowerCase();
})
console.log(grouped);

// - Check to see if all the words have more than 3 characters
const isAllMoreThan3 = _.every(words, function(word) {
  return word.length > 3;
})
console.log(isAllMoreThan3);

// - Check if some words are over twenty characters long
const isSomeMoreThan20 = _.some(words, function(word) {
  // console.log(`Considering`, word)
  return word.length > 20;
})
console.log(isSomeMoreThan20);

// - Get an array of all of the uids in ` people `
const uidsArray = _.pluck(people, 'uid');
console.log(uidsArray);

// - Find the person with the highest uid
const max = _.max(people, 'uid')
console.log(max);

// - Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
const evenOddCount = _.countBy(numbers, function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
console.log(evenOddCount);

// - Get three random numbers out of ` numbers `
const sample = _.sample(numbers, 3);
console.log(sample);

//
// ## Remember!
//
// You have the [documentation!](https://underscorejs.org/)
