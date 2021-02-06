var mongoose = require('mongoose');
var BookModel = require('../models/book.js');



var getAll = function() {
  return BookModel.find();
};

console.log(getAll());