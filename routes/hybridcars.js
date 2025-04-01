var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hybridcars', { title: 'Search Results hybridcars' });
});

module.exports = router;
