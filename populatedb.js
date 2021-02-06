var Book = require('./models/book.js');
// var mongoose = require('mongoose');


// create mongoose
const mongoose = require('mongoose');
var dbURL = ('mongodb://localhost:27017/bookwyrm');
mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
  console.log('connection open');
})


function bookCreate(title, authorLast, authorFirst, format) {
  bookdetail = {
    title: title,
    authorLast: authorLast,
    authorFirst: authorFirst,
    format: format
  }



  var book = new Book(bookdetail);
  book.save(function (err, newbook) {
    if (err) {
      console.error(err);
    } else {
      console.log(newbook);
      console.log('New Book: ' + book);
    }
  });
};





bookCreate('Pride and Prejudice', 'Austen', 'Jane', 'harcover');

// mongoose.connection.close();

