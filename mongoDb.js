module.exports = {
	connect: function() {
		require('dotenv').load();
		var uriTestDb = "mongodb://team-manager-user:" + process.env.passwordDb + "@cluster0-shard-00-00-qewlt.mongodb.net:27017,cluster0-shard-00-01-qewlt.mongodb.net:27017,cluster0-shard-00-02-qewlt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
		var MongoClient = require('mongodb').MongoClient;
		MongoClient.connect(uriTestDb, function(err, db) {
			// Paste the following examples here
			if (err) {
				throw err;
			}
			db.close();
		});
		console.log('Now the value for passwordDb is:', process.env.passwordDb);
		return 'connection ok';
	},
	mongooseConnect: function() {
		var uriTestDb = "mongodb://team-manager-user:" + process.env.passwordDb + "@cluster0-shard-00-00-qewlt.mongodb.net:27017,cluster0-shard-00-01-qewlt.mongodb.net:27017,cluster0-shard-00-02-qewlt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
		var mongoose = require('mongoose');

		mongoose.connect(uriTestDb);

		var db = mongoose.connection;

		db.on('error', function(err) {
			console.log('mongoose connection error', err);
		});
		db.once('open', function() {
			console.log('mongoose connection connected.');
		});
		db.close();
		return 'connection ok';
	},
	mongodbPass: function() {
		return process.env.passwordDb;
	}
}