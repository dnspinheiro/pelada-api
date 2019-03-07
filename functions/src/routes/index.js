// import express from 'express';
const express = require("express");

const router = express.Router();

const pelada_router = require("./pelada.routes");
const jogador_router = require("./jogador.routes");
const estatistica_router = require("./estatistica.routes");

router.use("/pelada", pelada_router);
router.use("/jogador", jogador_router);
router.use("/estatistica", estatistica_router);

module.exports = router;