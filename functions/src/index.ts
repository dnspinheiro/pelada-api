import express = require('express');
import path = require('path');
import cors = require('cors');
import functions = require('firebase-functions');

var router = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'apidoc')));
app.use(cors());
app.use('/', () => {
  // // console.log();
  // next();
}, router);

// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error', { err: err });
// });

export const pelada = functions.https.onRequest(app);
// export const pelada = functions.https.onRequest((request, response) => {
//   response.send("HelloWorld Pelada App");
// });
