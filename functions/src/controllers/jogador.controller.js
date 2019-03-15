'use strict'

const repository = require('../repositories/jogador.repository')();
const ResponseMessage = require('../utils/responses');

function JogadorController() { }

JogadorController.prototype.get = function (req, res, next) {
    let response = new ResponseMessage();

    repository.get().then((array) => {
        if (array.length > 0) {
            return response.success(res, "Doc(s) encontrado(s)", array);
        } else {
            return response.success(res, "Nenhum jogadore foi encontrado", array);
        }
    }).catch(error => {
        console.log('error - listar jogadors', error);
        return response.error(res, "Erro ao listar jogadores ");
    });
};

JogadorController.prototype.post = function (req, res, next) {
    let response = new ResponseMessage();
    let jogador = req.body;

    repository.post(jogador).then((retorno) => {
        return response.success(res, "Jogador criada com sucesso!", []);
    }).catch(error => {
        console.log('error - inserir jogador', error);
        return response.error(res, "Erro ao criar jogador!");
    });
};

JogadorController.prototype.alterar = function (req, res, next) {
    let response = new ResponseMessage();

    repository.getById(req.params.id).then((obj) => {
        if (obj) {
            repository.update(req.params.id, req.body).then(retorno => {
                return response.success(res, "Jogador atualizada com sucesso!", []);
            }).catch(error => {
                return response.error(res, "Erro ao atualizar jogador!");
            });
        } else {
            return response.success(res, "Nenhuma jogador foi encontrada para alteração!", {});
        }
    }).catch(error => {
        console.log('error - atualizar jogador', error);
        return response.error(res, "Erro ao buscar jogador para atualizar!");
    });
};

JogadorController.prototype.getById = function (req, res, next) {
    let response = new ResponseMessage();

    repository.getById(req.params.id).then((array) => {
        if (array) {
            return response.success(res, "Jogador foi encotrada", array);
        } else {
            return response.success(res, "Nenhuma jogador foi encontrado", array);
        }
    }).catch(error => {
        console.log('error - buscar por id jogador', error);
        return response.error(res, "Erro ao buscar jogador escolhida!");
    });
};

JogadorController.prototype.delete = function (req, res, next) {
    let response = new ResponseMessage();
    var id_jogador = req.params.id;

    repository.delete(id_jogador).then((array) => {
        return response.success(res, "Jogador excluída com sucesso!", []);
    }).catch(error => {
        console.log('error - excluir jogador', error);
        return response.error(res, "Erro ao excluir jogador! ");
    });
};

module.exports = function () {
    return new JogadorController();
};