// A simple HTTP web server in Node with just the Standard Library

const http = require('http'); //Node standard library

// The only function that server can run, it gets call everytime there is a request to the servernp
// req, res (request, response/input, output)
http.createServer((req, res) => {
  console.log(`Serving request: ${req.method} ${req.url}`); // El cheapo logging
  if (req.url === '/groucho') {
    res.end('Hello from Groucho');
  } else if (req.url === '/harpo') {
    res.end('Hello from Harpo');
  } else {
    res.end('Hello from nobody')
  }
}).listen(1337); //Elite

console.log('Server is running at http://localhost:1337');
