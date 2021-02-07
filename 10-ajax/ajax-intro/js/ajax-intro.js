const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // exit the function, the data isn't available yet.

    // process the JSON
    const data = JSON.parse(xhr.responseText); // Convert the JSON string into a real JS object.

    // console.log(xhr.responseText); ## This return only string
    console.log(data.text);
    //create an element
    const p = document.createElement('p'); // Convert the JSON string into a real JS object.

    // put text in the element
    p.innerHTML = data.text; // detached DOM node

    // display the element
    document.body.appendChild(p); // attach the DOM node
  };
};
document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
