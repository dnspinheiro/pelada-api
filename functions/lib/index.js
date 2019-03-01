"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cors = require("cors");
const functions = require("firebase-functions");
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
    // // console.log();
    next();
}, router);
// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.render('error', { err: err });
// });
exports.panelinha = functions.https.onRequest(app);
// export const pelada = functions.https.onRequest((request, response) => {
//   response.send("HelloWorld Pelada App");
// });
//# sourceMappingURL=index.js.map