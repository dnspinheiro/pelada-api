'use strict'
// EstatisticaRepository.js

const firebase = require('../db/firebase');
const db = firebase.firestore();

function EstatisticaRepository() { }

EstatisticaRepository.prototype.get = function () {
    return db.collection('Estatistica/').get().then(snapshot => {
        var array = [];
        snapshot.forEach((doc) => {
            var obj = doc.data();
            obj.id = doc.id;
            array.push(obj);
        });
        return array;
    });
};

EstatisticaRepository.prototype.getById = function (id) {
    return db.collection('Estatistica/').doc(id).get().then(doc => {
        if (doc.exists) {
            var obj = doc.data();
            obj.id = doc.id;
            return obj;
        } else {
            return null;
        }
    });
};

EstatisticaRepository.prototype.post = function (estatistica) {
    return db.collection('Estatistica/').doc().set(estatistica);
};

EstatisticaRepository.prototype.update = function (id, estatistica) {
    return db.collection('Estatistica/').doc(id).update(estatistica);
};

EstatisticaRepository.prototype.delete = function (id) {
    return db.collection('Estatistica/').doc(id).delete();
};

module.exports = function () {
    return new EstatisticaRepository();
};