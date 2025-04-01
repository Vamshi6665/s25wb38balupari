var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/grid', function(req, res, next) {
  // Get query parameters from the URL
  const { rows, cols } = req.query;

  // Pass the query parameters to the template
  res.render('grid', { title: 'Grid Display', query: { rows, cols } });
});

module.exports = router;
