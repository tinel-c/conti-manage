var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/title/:title', function(req, res, next) {
	res.render('index', req.params);
});

router.get('/searching', function(req, res) {
	var val = req.query.search;
	console.log(__filename + ": /searching for" + val);
	res.send("Searching for: " + val);
});

module.exports = router;