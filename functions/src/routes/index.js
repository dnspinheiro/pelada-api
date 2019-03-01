// import express from 'express';
const express = require("express");

const router = express.Router();

const pelada_router = require("./pelada.routes");
const jogador_router = require("./jogador.routes");

router.use("/pelada", pelada_router);
router.use("/jogador", jogador_router);

module.exports = router;