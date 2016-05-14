var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var verify = require('./middleware/verify');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var RedisStore = require( "connect-redis" )(session);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({ store: new RedisStore({
  host: '127.0.0.1',
  port: 6379
}), secret: 'hey you' }));
passport.use(new LocalStrategy(verify.verUser));
passport.serializeUser(verify.serialize);

passport.deserializeUser(verify.deserialize);
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var mongodb = require('mongodb');
var monk = require('monk');
var db = monk("localhost:27017/test");
if(!db)
  console.log("no connection");
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    console.log('err', err);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  console.log("err", err);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
