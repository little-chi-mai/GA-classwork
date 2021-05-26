const express = require('express');
const ejs = require('ejs');
const _ = require ('underscore');
const axios = require('axios');

const server = express(); // return a server object.
server.set('view-engine', ejs) // see docs
server.use(express.static('public')); // see docs

const PORT = 1337; // Single definition for ease of modification later (readable + DRY)

//request / response
server.get('/', (req, res) => {
  const brothers = 'Groucho Harpo Chico Zeppo Mai'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', {brother: randomBrother, lucky: _.random(40)}) // "Instance" variables.
})

server.get('/groucho', (req, res) => {
  res.send('Hello from groucho')
})

// Dynamic URLs
server.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

// Calculcator
// /calc/5/3/* => 15

server.get('/calc/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } // TODO: multiplication etc

  res.render('calc.ejs', {answer: answer})
})

// JSON API
server.get('/info.json', (req, res) => {
  res.json({    // feed in any js object
    name: 'Mai',
    instrument: 'guitar'
  })
})

// axios in Node (httparty)
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', {fact: response.data})
  })
})

// Forms
server.get('/ask', (req, res) => {
  res.render('ask.ejs');
})

server.get('/answer', (req, res) => {
  res.render('answer.ejs', {question: req.query.question, answer: 'No comment'}) //req.query after the '?' in the URL
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));
