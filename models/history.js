var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HistorySchema = new Schema(
  {
    executedChange:{type: String, required: true, max: 500},
    uid: {type: String, required: true, max: 100},
    date: {type: Date, required: true}
  }
);

// Virtual for hystory hystoryLog
HistorySchema
.virtual('hystoryLog')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for hystory's URL
HistorySchema
.virtual('url')
.get(function () {
  return '/hystory/' + this._id;
});

//Export model
module.exports = mongoose.model('Hystory', HistorySchema);