var notification = require('../models/notification')
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var notifications = []


/* GET notifications listing. */
router.get('/', function(req, res, next) {
	res.send('Respond from notification');
});

// *** api routes *** //
router.get('/all', findAllNotifications);
router.get('/allHtml', findAllHtmlNotifications);
router.get('/deleteAll', deleteAllNotifications);

function callBackFunction(text, return_value) {
	console.log(return_value);
}


// *** get ALL notifications *** //
function findAllNotifications(req, res) {
	notification.find(function(err, notifications) {
		if (err) {
			res.json({
				'ERROR': err
			});
		} else {
			res.json(notifications);
			notifications.forEach(function(element) {
				console.log(element.getNotificationEntry);
			});
		}
	});
}

// *** get ALL notifications *** //
function findAllHtmlNotifications(req, res) {
	notification.find(function(err, notifications) {
		if (err) {
			res.json({
				'ERROR': err
			});
		} else {
			var htmlOutput = "";
			notifications.forEach(function(element) {
			htmlOutput = element.getNotificationEntry + htmlOutput;
			});
			res.send(htmlOutput);
		}
	});
}

// *** delete ALL notification *** //
function deleteAllNotifications(req, res) {
	// function to be removed in the live application
	console.log(">>>>>>>>>>>>> Delete all notifications!!!")
	notification.remove({}, callBackFunction);
	console.log(">>>>>>>>>>>>> Delete all history notifications!!!")
	notification.clearHistory(callBackFunction);
	res.json({
		'REMOVED': 'all'
	});
}

module.exports = router;