// setTimeout expects a callback - it does not use Promises
// task: wrap setTimeout in a Promise


// YOUR CODE HERE

const holdUp = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}


// Make this code work:
holdUp(3000).then(() => {
  console.log('3 seconds has passed');
})
