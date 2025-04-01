var express = require('express');
var router = express.Router();

/* GET hybrid cars page. */
router.get('/', function(req, res, next) {
  res.render('hybridcars', { title: 'Search Results - Hybrid Cars' });
});

module.exports = router;
