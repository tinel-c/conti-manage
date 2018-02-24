#! /usr/bin/env node

console.log('This script populates user instances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');
require('dotenv').load();
var uriTestDb = "mongodb://team-manager-user:" + process.env.passwordDb + "@cluster0-shard-00-00-qewlt.mongodb.net:27017,cluster0-shard-00-01-qewlt.mongodb.net:27017,cluster0-shard-00-02-qewlt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
console.log(uriTestDb);

var async = require('async')
var user = require('../models/user')


var mongoose = require('mongoose');
var mongoDB = uriTestDb;
mongoose.connect(uriTestDb);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

async.series([
    createUsers,
  ],
  // optional callback
  function(err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    } else {
      console.log('UserInstances: ' + users);

    }
    //All done, disconnect from database
    mongoose.connection.close();
  });