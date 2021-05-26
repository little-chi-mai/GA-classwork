const express = require('express');
const stockfinder = require('stockfinder');

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();

server.get('/', (req, res) => {
  res.render('home.ejs')
})

server.get('/info', (req, res) => {
  stockfinder.getStock({ticker: req.query.symbol, apiKey: APIKEY}).then((result) => {
    console.log(result);
    res.render('info.ejs', {symbol: req.query.symbol, price: result.iexRealtimePrice}) //pass the price down to the view. THIS INSIDE GET!!!
  })
})

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
