const express = require('express');
const app = express();
const port = 9000;
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})

// app.get('/', function(req, res){
//   res.render('/../src/index.jsx');
// });