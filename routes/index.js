var express = require('express');
var router = express.Router();
//database connections
const stitch = require("mongodb-stitch")
const client = new stitch.StitchClient('test-uofww');
const db = client.service('mongodb', 'mongodb-atlas').db('team-manager');


/* GET home page. */
router.get('/', function(req, res, next) {
	//connect to the database
	client.login().then(() =>
	  db.collection('users').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
	).then(() =>
	  db.collection('users').find({owner_id: client.authedId()}).limit(100).execute()
	).then(docs => {
	  console.log("Found docs", docs)
	  console.log("[MongoDB Stitch] Connected to Stitch")
	}).catch(err => {
	  console.error(err)
	});

	// render the page

	res.render('index', {
		title: 'Express'
	});
});

router.get('/title/:title', function(req, res, next) {
	res.render('index', req.params);
});

router.get('/userProfile', function(req, res, next) {
	res.render('userProfile', req.params);
});

router.get('/searching', function(req, res) {
	var val = req.query.search;
	console.log(__filename + ": /searching for" + val);
	res.send("Searching for: " + val);
});

router.get('/grid', function(req, res) {
	var val = req.query.visible;
	console.log(__filename + ": /searching for" + val);
	res.send("Grid : " + val);
});


module.exports = router;