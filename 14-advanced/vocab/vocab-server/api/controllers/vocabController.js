const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

exports.listAllWords = (req, res) => {
    Vocab.find({}, (err, words) => { // {}: find everything
        if(err) res.send(err);
        res.json(words);
    }); // find everything
};

exports.createAWord = (req, res) => {
    const newWord = new Vocab(req.body);
    newWord.save((err, word) => { // save: a mongoose method 
        if (err) res.send(err);
        res.json(word);
    })
}

exports.readAWord = (req, res) => {
    Vocab.findById(req.params.wordId, (err, word) => {
        if (err) res.send(err);
        res.json(word);
    })
}

exports.updateAWord = (req, res) => {
    Vocab.findOneAndUpdate(
        { _id: req.params.wordId },
        req.body, // params [:word]
        {new: true}, // docs
        (err, word) => {
            if (err) res.send(err);
            res.json(word)
        }
    )
}

exports.deleteAWord = (req, res) => {
    Vocab.deleteOne(
        {_id: req.params.wordId}, (err) => {
            if (err) res.send(err);
            res.json({
                message: 'Word deleted',
                _id: req.params.wordId
            })
        }
    )
}