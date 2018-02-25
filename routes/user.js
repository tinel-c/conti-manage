var user = require('../models/user')
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

require('dotenv').load();
var uriTestDb = "mongodb://team-manager-user:" + process.env.passwordDb + "@cluster0-shard-00-00-qewlt.mongodb.net:27017,cluster0-shard-00-01-qewlt.mongodb.net:27017,cluster0-shard-00-02-qewlt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
var mongoDB = uriTestDb;
mongoose.connect(uriTestDb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('Respond from user');
});

// *** api routes *** //
router.get('/all', findAllUsers);
router.get('/findId/:id', findUserById);
router.get('/findByFirstName/:first_name', findUserByFirstName);
router.post('/add', addNewUser);
router.get('/addInline/:first_name/:family_name/:uid/:role', addNewUserInline);
router.put('/update/:id', updateUser);
router.get('/delete/:id', deleteUser);
router.get('/deleteAll', deleteAllUsers);

function callBackFunction(text, return_value) {
	console.log(return_value);
}

function userCreate(first_name, family_name, uid, role, cb) {
	userdetail = {
		first_name: first_name,
		family_name: family_name,
		uid: uid,
		role: role
	}

	var userInstance = new user(userdetail);

	userInstance.save(function(err) {
		if (err) {
			cb(err, null)
			return
		}
		console.log('New userInstance: ' + userInstance);
		users.push(userInstance)
		cb(null, userInstance)
	});
}


// *** get ALL users *** //
function findAllUsers(req, res) {
	user.find(function(err, users) {
		if (err) {
			res.json({
				'ERROR': err
			});
		} else {
			res.json(users);
		}
	});
}

// *** get SINGLE users *** //
function findUserById(req, res) {
	user.findById(req.params.id, function(err, blob) {
		if (err) {
			res.json({
				'ERROR': err
			});
		} else {
			res.json(blob);
		}
	});
}


// *** get SINGLE users *** //
function findUserByFirstName(req, res) {
	user.findOne({
		'first_name': req.params.first_name
	}, 'first_name family_name uid role _id', function(err, userInstance) {
		if (err) {
				res.json({
					'ERROR': err
				});
			} else {
				res.json({
					'FOUND': userInstance
				});
			}
		console.log(userInstance);
	});
}


// *** post one user *** //
function addNewUser(req, res) {
	userCreate(req.body.first_name,
		req.body.family_name,
		req.body.uid,
		req.body.role,
		function(err, result) {
			if (err) {
				res.json({
					'ERROR': err
				});
			} else {
				res.json({
					'ADD': result
				});
			}
		});
}

// *** post one user with a get inline request*** //
function addNewUserInline(req, res) {
	userCreate(req.params.first_name,
		req.params.family_name,
		req.params.uid,
		req.params.role,
		function(err, result) {
			if (err) {
				res.json({
					'ERROR': err
				});
			} else {
				res.json({
					'ADD': result
				});
			}
		});
}

function updateUser(req, res) {
	user.findById(req.params.id, function(err, userInstance) {
		userInstance.first_name = req.body.first_name;
		userInstance.family_name = req.body.family_name;
		userInstance.uid = req.body.uid;
		userInstance.role = req.body.role;
		userInstance.save(function(err) {
			if (err) {
				res.json({
					'ERROR': err
				});
			} else {
				res.json({
					'UPDATED': userInstance
				});
			}
		});
	});
}

// *** delete SINGLE user *** //
function deleteUser(req, res) {
	user.findById(req.params.id, function(err, userInstance) {
		if (err) {
			res.json({
				'ERROR': err
			});
		} else {
			userInstance.remove(function(err) {
				if (err) {
					res.json({
						'ERROR': err
					});
				} else {
					res.json({
						'REMOVED': userInstance
					});
				}
			});
		}
	});
}

// *** delete ALL user *** //
function deleteAllUsers(req, res) {
	console.log(">>>>>>>>>>>>> Delete all users!!!")
	user.remove({}, callBackFunction);
	res.json({
		'REMOVED': 'all'
	});
}


module.exports = router;