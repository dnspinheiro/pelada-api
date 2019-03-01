'use strict'
// PeladaRepository.js

const firebase = require('../db/firebase');
const db = firebase.firestore();

function PeladaRepository() { }

PeladaRepository.prototype.get = function () {
    // return db.collection('Peladas/').get();
    return [];
};

module.exports = function () {
    return new PeladaRepository();
};