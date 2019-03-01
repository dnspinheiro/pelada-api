import createError = require('http-errors');
import express = require('express');
import path = require('path');
import cors = require('cors');
import functions = require('firebase-functions');

const router = require('../src/routes/index');

const app = express();

// view engine setup
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'apidoc')));
app.use(cors());
app.use('/', (req, res, next) => {
  next();
}, router);

app.use(function (req, res, next) {
  next(createError(404, "Caminho não encontrado!"));
});



export const panelinha = functions.https.onRequest(app);
