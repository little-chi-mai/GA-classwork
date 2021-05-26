const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // asynchronous

  // this function gets called for us every time the readyState changes;
  xhr.onreadystatechange = function () {
    // console.log('ready state changed', xhr.readyState, xhr.responseText);

    if (xhr.readyState !== 4) return; // exit the function, the data isn't available yet.
    console.log(xhr.responseText);

    // when it's ready
    console.log('Aha! The ready State must be 4', xhr.readyState, xhr.responseText);

    // process the JSON
    const data = JSON.parse(xhr.responseText); // Convert the JSON string into a real JS object.

    // console.log(xhr.responseText); ## This return only string
    console.log(data.text);
    //create an element
    const p = document.createElement('p'); // detached DOM node

    // put text in the element
    p.innerHTML = data.text; 

    // display the element
    document.body.appendChild(p); // attach the DOM node
  };
  
};

// Attach the event handle to a DOM node
document.getElementById('fetch').addEventListener('click', fetchFact);

// First fact for free
fetchFact();

// const fetchFact = function () {
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== 4) {
//       return; // Not ready yet.
//     }
//     console.log(xhr.responseText);
//     const p = document.createElement('p'); // detached DOM node
//     p.innerHTML = xhr.responseText;
//     document.body.appendChild(p);
//   };

//   xhr.open('GET', 'http://numbersapi.com/random/trivia');
//   xhr.send(); // asynchronous
// };

// // Attach the event handler to a DOM node
// document.getElementById('fetch').addEventListener('click', fetchFact);
// fetchFact(); // First fact is free.