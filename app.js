const express = require('express');
const app = express();
const port = 9000;
// const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
var book = require('./models/book.js');



var indexRouter = require('./routes/index');

// set up mongoose connection
const mongoose = require('mongoose');
var dbURL = ('mongodb://localhost:27017/bookwyrm');

mongoose.Promise = global.Promise;
mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// app.use(express.static(__dirname + './dist'));
app.use(express.static('./dist'));

app.use(bodyParser.urlencoded({extended: true}));

// app.use(indexRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})


const router = express.Router();
const controllers = require('./controllers/index.js');


app.get('/', (req, res) => {
  console.log('request received');
  res.end();
});


module.exports = app;
