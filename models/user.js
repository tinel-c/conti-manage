var mongoose = require('mongoose');
var mongooseHistory = require('mongoose-history');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    uid: {type: String, required: true, max: 100},
    role: {type: String, required: true, max: 100},
  }
);


// TODO implmenet user metadata inside the history
var options = {
  metadata: [
    {key: 'user', value: 'toBeImplemented'}
  ]
};

UserSchema.plugin(mongooseHistory,options);
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