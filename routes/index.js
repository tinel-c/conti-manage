var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/title/:title', function(req, res, next) {
  res.render('index', req.params );
});

module.exports = router;
