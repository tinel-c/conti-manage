var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('forgot-password', {
		title: 'Forgot password'
	});
});
module.exports = router;