// # The Collatz conjecture
// The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed it in 1937. It's also known as the 3n + 1 conjecture, the Ulam conjecture, the Kakutani's problem, the Thwaites conjecture, Hasse's problem or the Syracuse problem, the sequence of numbers that results is referred to as the hailstone numbers or the wondrous numbers.
//
// The problem is defined as follows:
//
// ```
// Take any positive integer n. If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
// Repeat the process indefinitely.
// ```
// The conjecture is that no matter what number you start with, you will always eventually reach 1.
//
// Your aim to create a function that will count how many times it takes for a particular number to reach 1.
//
// ## Task
// Write a program that given a number, verifies this conjecture for all positive numbers greater than one. Ideally your program will output when it has completed, how many cycles it ran for and all the steps it took to reach the end.
//
// Examples to verify your program can be found on the [wikipedia](https://en.wikipedia.org/wiki/Collatz_conjecture) page.

const collatz = (n) => {
  let count = 0;
  let result = n;
  while (result !== 1) {
    if (result % 2 === 0) {
      result = result/2;
    } else {
      result = 3 * result + 1;
    }
    count += 1;
    console.log(result);
    console.log('Count', count, 'steps');
  }
  return result
}

collatz(97);
