// const db = require('./db.js')
const mongoose = require('mongoose');
// const schema = require('./schema');
// const Book = mongoose.model('Book', schema.booksSchema);
var Book = require('./models/book');


var book = new Book({
  title: 'Pride and Prejudice',
  authorLast: 'Austen',
  authorFirst: 'Jane',
  format: 'hardcover'
});

// book.save();

module.exports(book.save(function(err, book) {
  if (err) {
    console.error(err);
  } else {
    console.log('saved');
  }
  )
}));


// module.exports = {
//   create: (info) => {
//     return new Promise((resolve, reject) => {
//       var book = new Book();
//       book.title = info.title;
//       book.format = info.format;
//       book.authorLast = info.authorLast;
//       book.authorFirst = info.authorFirst;
//       book.save((err, data) => {
//         if (err) {
//           reject(error);
//         } else {
//           resolve(data);
//         }
//       })
//     })
//   }
// }



