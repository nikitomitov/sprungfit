var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");
var Database = require("./Database.js");
var VerifyToken = require('./routes/auth/VerifyToken');

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('app.properties');
const getProperty = (prop) => properties.get(prop);

var app = express();

// Create database connection
app.use(function(req, res, next) {
	res.locals.db = new Database({
		host     : process.env.DATABASE_HOST || getProperty('mysql.host'),
		user     : getProperty('mysql.user'),
		password : getProperty('mysql.password'),
		database : getProperty('mysql.database'),
    port: getProperty('mysql.port')
	});
	next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var AuthController = require('./routes/auth/AuthController');
app.use('/api/v1/auth', AuthController);

var UsersController = require('./routes/users/UsersController');
app.use('/api/v1/users', VerifyToken, UsersController);

var PostsController = require('./routes/posts/PostsController');
app.use('/api/v1/posts', VerifyToken, PostsController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
