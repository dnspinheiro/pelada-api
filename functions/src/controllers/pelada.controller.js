'use strict'

const repository = require('../repositories/pelada.repository')();
const ResponseMessage = require('../modules/util/responses');

function PeladaController() { }

PeladaController.prototype.get = function (req, res, next) {
    let response = new ResponseMessage();

    repository.get()
        .then((snapshot) => {
            var array = [];
            snapshot.forEach((doc) => {
                var obj = doc.data();
                obj.id = doc.id;
                array.push(obj);
            });
            if (array.length > 0) {
                return response.success(res, "Doc(s) encontrado(s)", array);
            } else {
                return response.success(res, "Nenhum doc foi encontrado", array);
            }
        })
        .catch((err) => {
            return response.error(res, "Erro ao carregar o doc: " + err);
        });
};