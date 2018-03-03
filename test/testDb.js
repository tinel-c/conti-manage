var db = require('../db');
const assert = require('chai').assert;
var async = require('async')
var user = require('../models/user')

db.connect();

var users = []


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

function createUsers(cb) {
	async.parallel([
			function(callback) {
				userCreate('Patrick', 'Rothfuss', 'uidl9703', 'team lead', callback);
			},
			function(callback) {
				userCreate('Ben', 'Bova', 'uidl9704', 'employee', callback);
			},
			function(callback) {
				userCreate('Isaac', 'Asimov', 'uidl9705', 'group lead', callback);
			},
			function(callback) {
				userCreate('Bob', 'Billings', 'uidl9706', 'employee', callback);
			},
			function(callback) {
				userCreate('Jim', 'Jones', 'uidl9707', 'employee', callback);
			}
		],
		// optional callback
		cb);
}


function executeDone(){
	console.log("Execution done");
}


createUsers(executeDone);	

