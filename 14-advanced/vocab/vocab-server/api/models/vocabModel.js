const mongoose = require('mongoose');

const {Schema} = mongoose;
// const Schema = mongoose.Schema

// {english: 'sausage', vietnamese: 'xuc xich' }
const VocabSchema = new Schema(
    {
        english: {
            type: String,
            required: 'English word cannot be blank'
        },
        vietnamese: {
            type: String,
            required: 'Vietnamese word cannot be blank'
        }
    },
    { collection: 'vocab' } // name of the collection or db, (table name)
);

module.exports = mongoose.model('Vocab', VocabSchema); // Vocab: model's name