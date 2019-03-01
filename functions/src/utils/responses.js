'use strict';

function CreateResponseMessage() {
}

CreateResponseMessage.prototype.success = (res, message, object) => {
    var response = { type: "success", status: 200, message: message, result: object };
    res.status(200).send(response);
}

CreateResponseMessage.prototype.created = (res, message, object) => {
    var response = { type: "success", status: 201, message: message, result: object };
    res.status(201).send(response);
}

CreateResponseMessage.prototype.error = (res, code, message) => {
    var response = { type: "error", code: code, status: 400, message: message };
    res.status(400).send(response).end();
}
CreateResponseMessage.prototype.notFound = (res, code, message) => {
    var response = { type: "error", code: code, status: 404, message: message };
    res.status(404).send(response).end();
}

CreateResponseMessage.prototype.errorValidation = (res, message, object) => {
    var response = { type: "error", validation: true, status: 400, message: message, result: object };
    res.status(400).send(response).end();
}

CreateResponseMessage.prototype.forbidden = (res) => {
    var response = { type: "error", code: 'Forbidden', status: 403, message: 'Acesso negado.' };
    res.status(400).send(response).end();
}


CreateResponseMessage.prototype.unauthorized = (res) => {
    var response = { type: "error", code: 'Unauthorized', status: 401, message: 'Você não tem as permissões necessárias para a operação.' };
    res.status(400).send(response).end();
}

module.exports = function () {
    return new CreateResponseMessage();
};
