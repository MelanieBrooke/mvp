const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.get('/', (req, res) => {
  console.log('request received');
  res.send('hohoho')
})