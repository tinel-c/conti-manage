var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var db = require('./db');
var sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

var index = require('./routes/index');
var user = require('./routes/user');
var login = require('./routes/login');
var upload = require('./routes/upload');
var notification = require('./routes/notification');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// allow PUT and DELETE in more than the allowed places
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(cookieParser());
app.set('trust proxy', 1) // trust first proxy
//enable secure cookies only in production
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

//connect to the database
db.connect();

app.use(session(sess))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
app.use('/notification', notification);
app.use('/login', login);
app.use('/upload', upload);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
