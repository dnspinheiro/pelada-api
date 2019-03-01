'use strict'
// PeladaRepository.js

const firebase = require('../db/firebase');
const db = firebase.firestore();

function PeladaRepository() { }

PeladaRepository.prototype.get = function () {
    return db.collection('Peladas/').get().then(snapshot => {
        var array = [];
        snapshot.forEach((doc) => {
            var obj = doc.data();
            obj.id = doc.id;
            array.push(obj);
        });
        return array;
    });
    // return [];
};

module.exports = function () {
    return new PeladaRepository();
};