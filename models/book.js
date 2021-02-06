const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


// define book schema

var BookSchema = new Schema({
  title: {type: String, required: true},
  authorLast: {type: String, required: true},
  authorFirst: {type: String, required: true},
  format: {type: String, required: false}
});

// compile model from schema

var BookModel = mongoose.model('BookModel', BookSchema, "bookCollection");

module.exports = BookModel;

// todo: validate data