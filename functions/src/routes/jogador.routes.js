const express = require("express");
const router = express.Router();
const jogador_controller = require('../controllers/jogador.controller')();

router.get('/get', jogador_controller.get);
router.post('/post', jogador_controller.post);
router.put('/update/:id', jogador_controller.alterar);
router.get('/getById/:id', jogador_controller.getById);
router.delete('/delete/:id', jogador_controller.delete);

module.exports = router;