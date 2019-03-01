const express = require("express");
const router = express.Router();
const pelada_controller = require('../controllers/pelada.controller')();

router.get('/get', pelada_controller.get);
router.post('/post', pelada_controller.post);
router.put('/update/:id', pelada_controller.alterar);
router.get('/getById/:id', pelada_controller.getById);
router.delete('/delete/:id', pelada_controller.delete);

module.exports = router;