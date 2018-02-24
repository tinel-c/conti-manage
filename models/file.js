var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FileUpload = new Schema({
  fileName: {type: String, required: true},
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  summary: {type: String, required: true},
});

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
  return '/file/' + this._id;
});

//Export model
module.exports = mongoose.model('File', BookSchema);