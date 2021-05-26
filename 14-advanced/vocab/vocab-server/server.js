const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Probably unneccessary
const vocabModel = require('./api/models/vocabModel');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise; // Promise library
mongoose.set('useFindAndModify', false);
mongoose.connect(
    `mongodb+srv://javascriptmastery:${ process.env.MONGOPW }@cluster0.axanc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, //TODO: make it secure
    {useNewUrlParser: true}
);

const port = process.env.PORT || 3030; // get port number from heroku or local host
const app = express(); // where server lives

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Probably replaced with: app.use(express.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
})

console.log('Server started on http://localhost:' + port);