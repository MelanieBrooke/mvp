var mongoose = require('mongoose');
var BookModel = require('../models/book.js');
var MongoClient = require('mongodb').MongoClient;

var dbURL = ('mongodb://localhost:27017/bookwyrm');
mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
  console.log('connection open');
});


var getAll = function() {MongoClient.connect(dbURL, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("bookwyrm");
  var bookArr = [];
  var collection = dbo.collection("bookCollection").find();
  collection.forEach(function(book) {
    bookArr.push(book);
  });
  return bookArr;
});
};

console.log(getAll());