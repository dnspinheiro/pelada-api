'use strict'

const repository = require('../repositories/estatistica.repository')();
const ResponseMessage = require('../utils/responses');

function EstatisticaController() { }

EstatisticaController.prototype.get = function (req, res, next) {
    let response = new ResponseMessage();

    repository.get().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum doc foi encontrado", array);
        }
    }).catch(error => {
        console.log('error - listar estatisticas', error);
        return response.error(res, "Erro ao listar estatisticas ");
    });
};

EstatisticaController.prototype.post = function (req, res, next) {
    let response = new ResponseMessage();
    let estatistica = req.body;

    repository.post(estatistica).then((retorno) => {
        return response.success(res, "Estatistica criada com sucesso!", []);
    }).catch(error => {
        console.log('error - inserir Estatistica', error);
        return response.error(res, "Erro ao criar Estatistica!");
    });
};

EstatisticaController.prototype.alterar = function (req, res, next) {
    let response = new ResponseMessage();

    repository.getById(req.params.id).then((obj) => {
        if (obj) {
            repository.update(req.params.id, req.body).then(retorno => {
                return response.success(res, "Estatistica atualizada com sucesso!", []);
            }).catch(error => {
                return response.error(res, "Erro ao atualizar Estatistica!");
            });
        } else {
            return response.success(res, "Nenhuma Estatistica foi encontrada para alteração!", {});
        }
    }).catch(error => {
        console.log('error - atualizar Estatistica', error);
        return response.error(res, "Erro ao buscar Estatistica para atualizar!");
    });
};

EstatisticaController.prototype.getById = function (req, res, next) {
    let response = new ResponseMessage();

    repository.getById(req.params.id).then((array) => {
        if (array) {
            return response.success(res, "Estatistica foi encotrada", array);
        } else {
            return response.success(res, "Nenhuma Estatistica foi encontrado", array);
        }
    }).catch(error => {
        console.log('error - buscar por id Estatistica', error);
        return response.error(res, "Erro ao buscar Estatistica escolhida!");
    });
};

EstatisticaController.prototype.delete = function (req, res, next) {
    let response = new ResponseMessage();
    var id_estatistica = req.params.id;

    repository.delete(id_estatistica).then((array) => {
        return response.success(res, "Estatistica excluída com sucesso!", []);
    }).catch(error => {
        console.log('error - excluir Estatistica', error);
        return response.error(res, "Erro ao excluir Estatistica! ");
    });
};

module.exports = function () {
    return new EstatisticaController();
};