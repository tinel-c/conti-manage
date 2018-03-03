require('dotenv').load();
var MongoClient = require('mongodb').MongoClient
var uriTestDb = "mongodb://team-manager-user:" + process.env.passwordDb + "@cluster0-shard-00-00-qewlt.mongodb.net:27017,cluster0-shard-00-01-qewlt.mongodb.net:27017,cluster0-shard-00-02-qewlt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"

var state = {
  db: null,
}

exports.connect = function() {
if (state.db) return;

state.db = uriTestDb;
var mongoose = require('mongoose');
var mongoDB = uriTestDb;
mongoose.connect(uriTestDb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

exports.get = function() {
  return state.db;
}

exports.close = function(done) {
  if (state.db) {
      state.db = null
      state.mode = null
 	  done();
    }
}

