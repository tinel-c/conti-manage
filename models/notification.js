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
    default: Date.now()
  },
  changedBy: {
    type: String,
    required: false,
    max: 100
  }
});


function displayTime(timeInSeconds) {
  if (timeInSeconds < 60) {
    return "" + timeInSeconds + " second(s) ago.";
  } else {
    if (timeInSeconds < 3600) {
      return "" + Math.floor(timeInSeconds / 60) + " minute(s) ago.";
    } else {
      if(timeInSeconds < (3600 * 24)) {
        return "" + Math.floor(timeInSeconds / 3600 ) + " hour(s) ago.";
      } else {
        return "" + Math.floor(timeInSeconds / (3600 * 24)) + " day(s) ago.";
      }
    }
  }
}

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
    return '<a class="list-group-item list-group-item-action" href="#">' +
           '<div class="media"><img class="d-flex mr-3 rounded-circle" src="http://placehold.it/45x45" alt="">' + 
           '<div class="media-body">' +
           '<strong>' + this.name + '</strong>: ' +
           this.notificationText +     
           '<div class="text-muted smaller">' +
           displayTime(Math.floor((Date.now() - this.date) / 1000)) + 
           '</div></div></div></a>';
  });

// Virtual for Notification's URL
NotificationSchema
  .virtual('url')
  .get(function() {
    return '/notification/' + this._id;
  });

//Export model
module.exports = mongoose.model('Notification', NotificationSchema);