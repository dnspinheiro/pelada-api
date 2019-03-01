'use strict'
// PeladaRepository.js

const firebase = require('../db/firebase');
const db = firebase.firestore();

function PeladaRepository() { }

PeladaRepository.prototype.get = function () {
    return db.collection('Pelada/').get().then(snapshot => {
        var array = [];
        snapshot.forEach((doc) => {
            var obj = doc.data();
            obj.id = doc.id;
            array.push(obj);
        });
        return array;
    });
};

PeladaRepository.prototype.getById = function (id) {
    return db.collection('Pelada/').doc(id).get().then(doc => {
        if (doc.exists) {
            var obj = doc.data();
            obj.id = doc.id;
            return obj;
        } else {
            return null;
        }
    });
};

PeladaRepository.prototype.post = function (pelada) {
    return db.collection('Pelada/').doc().set(pelada);
};

PeladaRepository.prototype.update = function (id, pelada) {
    return db.collection('Pelada/').doc(id).update(pelada);
};

PeladaRepository.prototype.delete = function (id) {
    return db.collection('Pelada/').doc(id).delete();
};

module.exports = function () {
    return new PeladaRepository();
};