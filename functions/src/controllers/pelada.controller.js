'use strict'

const repository = require('../repositories/pelada.repository')();
const ResponseMessage = require('../utils/responses');

function PeladaController() { }

PeladaController.prototype.get = function (req, res, next) {
    let response = new ResponseMessage();

    // return response.success(res, "Hello routes panelinha", {});
    repository.get().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        return response.error(res, "Erro ao listar peladas ");
    });
};

PeladaController.prototype.post = function (req, res, next) {
    let response = new ResponseMessage();

    // return response.success(res, "Hello routes panelinha", {});
    repository.post().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        return response.error(res, "Erro ao listar peladas ");
    });
};

PeladaController.prototype.alterar = function (req, res, next) {
    let response = new ResponseMessage();

    // return response.success(res, "Hello routes panelinha", {});
    repository.post().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        return response.error(res, "Erro ao listar peladas ");
    });
};

PeladaController.prototype.getById = function (req, res, next) {
    let response = new ResponseMessage();

    // return response.success(res, "Hello routes panelinha", {});
    repository.post().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        return response.error(res, "Erro ao listar peladas ");
    });
};

PeladaController.prototype.delete = function (req, res, next) {
    let response = new ResponseMessage();

    // return response.success(res, "Hello routes panelinha", {});
    repository.post().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        return response.error(res, "Erro ao listar peladas ");
    });
};

module.exports = function () {
    return new PeladaController();
};