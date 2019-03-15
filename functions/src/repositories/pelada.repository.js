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
    var fcm = firebase.messaging();
    var message = {
        android: {
            ttl: 3600 * 1000,
            notification: {
                title: "Vai perder?",
                body: "Foi criado uma pelada dos " + pelada.nome + " para " + pelada.hora,
                color: '#95b700',
            }
        },
        topic: "/topics/all",
    };

    fcm.send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });

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