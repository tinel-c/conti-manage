var mongoose = require('mongoose');
var mongooseHistory = require('mongoose-history');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    uid: {type: String, required: true, max: 100},
    role: {type: String, required: true, max: 100},
    changedBy: {type: String, required: false, max: 100},
  }
);


// TODO add authenticated user in this session
UserSchema.pre('save', function(next) {
  this.changedBy = 'addAutenticatedUSer';

  next();
});

// use mongoose-history to save changes to user_history
UserSchema.plugin(mongooseHistory);

// Virtual for user name
UserSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);