var mongoose = require('mongoose');
var mongooseHistory = require('mongoose-history');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
  notificationText: {
    type: String,
    required: true,
    max: 200
  },
  name: {
    type: String,
    required: true,
    max: 200
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  changedBy: {
    type: String,
    required: false,
    max: 100
  }
});


// TODO add authenticated Notification in this session
NotificationSchema.pre('save', function(next) {
  this.changedBy = 'addAutenticatedUSer';
  next();
});

// use mongoose-history to save changes to user_history
NotificationSchema.plugin(mongooseHistory);

// Virtual for Notification name
NotificationSchema
  .virtual('getNotificationEntry')
  .get(function() {
    return '<a class="list-group-item" href="#"><i class="fa fa-comment fa-fw"></i>' +
      this.notificationText +
      '<span class="pull-right text-muted small"><em>' +
      this.name +
      Math.floor((Date.now - date) / 60000) + 'minutes ago' +
      '</em></span></a>';
  });

// Virtual for Notification's URL
NotificationSchema
  .virtual('url')
  .get(function() {
    return '/notification/' + this._id;
  });

//Export model
module.exports = mongoose.model('Notification', NotificationSchema);