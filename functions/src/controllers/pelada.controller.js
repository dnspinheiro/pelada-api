'use strict'

const repository = require('../repositories/pelada.repository')();
const ResponseMessage = require('../utils/responses');

function PeladaController() { }

PeladaController.prototype.get = function (req, res, next) {
    let response = new ResponseMessage();

    repository.get().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        console.log('error - listar peladas', error);
        return response.error(res, "Erro ao listar peladas ");
    });
};

PeladaController.prototype.post = function (req, res, next) {
    let response = new ResponseMessage();
    let pelada = req.body;

    repository.post(pelada).then((retorno) => {
        return response.success(res, "Pelada criada com sucesso!", retorno);
    }).catch(error => {
        console.log('error - inserir pelada', error);
        return response.error(res, "Erro ao criar pelada!");
    });
};

PeladaController.prototype.alterar = function (req, res, next) {
    let response = new ResponseMessage();

    repository.getById(req.params.id).then((obj) => {
        if (obj) {
            repository.update(req.params.id, req.body).then(retorno => {
                return response.success(res, "Pelada atualizada com sucesso!", retorno);
            }).catch(error => {
                return response.error(res, "Erro ao atualizar pelada!");
            });
        } else {
            return response.success(res, "Nenhuma pelada foi encontrada para alteração!", {});
        }
    }).catch(error => {
        console.log('error - atualizar pelada', error);
        return response.error(res, "Erro ao buscar pelada para atualizar!");
    });
};

PeladaController.prototype.getById = function (req, res, next) {
    let response = new ResponseMessage();

    repository.getById(req.params.id).then((array) => {
        if (array) {
            return response.success(res, "Pelada foi encotrada", array);
        } else {
            return response.success(res, "Nenhuma pelada foi encontrado", array);
        }
    }).catch(error => {
        console.log('error - buscar por id pelada', error);
        return response.error(res, "Erro ao buscar pelada escolhida!");
    });
};

PeladaController.prototype.delete = function (req, res, next) {
    let response = new ResponseMessage();
    var id_pelada = req.params.id;

    repository.delete(id_pelada).then((array) => {
        return response.success(res, "Pelada excluída com sucesso!", array);
    }).catch(error => {
        console.log('error - excluir pelada', error);
        return response.error(res, "Erro ao excluir pelada! ");
    });
};

module.exports = function () {
    return new PeladaController();
};