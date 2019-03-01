'use strict'
// JogadorRepository.js

const firebase = require('../db/firebase');
const db = firebase.firestore();

function JogadorRepository() { }

JogadorRepository.prototype.get = function () {
    return db.collection('Jogador/').get().then(snapshot => {
        var array = [];
        snapshot.forEach((doc) => {
            var obj = doc.data();
            obj.id = doc.id;
            array.push(obj);
        });
        return array;
    });
};

JogadorRepository.prototype.getById = function (id) {
    return db.collection('Jogador/').doc(id).get().then(doc => {
        if (doc.exists) {
            var obj = doc.data();
            obj.id = doc.id;
            return obj;
        } else {
            return null;
        }
    });
};

JogadorRepository.prototype.post = function (jogador) {
    return db.collection('Jogador/').doc().set(jogador);
};

JogadorRepository.prototype.update = function (id, jogador) {
    return db.collection('Jogador/').doc(id).update(jogador);
};

JogadorRepository.prototype.delete = function (id) {
    return db.collection('Jogador/').doc(id).delete();
};

module.exports = function () {
    return new JogadorRepository();
};