const vocabBuilder = require('../controllers/vocabController');

// RESTful routes
// GET    /words   :index
// POST   /words   :create
// GET    /words/:wordId :show
// PUT    /words/:wordId :update
// DELETE /words/:wordId :destroy

module.exports = (app) => {
    app.route('/words')
        .get(vocabBuilder.listAllWords) // method .list_all_words // index
        .post(vocabBuilder.createAWord); // create
    
    app.route('/words/:wordId')
        .get(vocabBuilder.readAWord)      // show
        .put(vocabBuilder.updateAWord)    // update
        .delete(vocabBuilder.deleteAWord); // destroy
}