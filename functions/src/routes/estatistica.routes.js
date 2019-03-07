const express = require("express");
const router = express.Router();
const estatistica_controller = require('../controllers/estatistica.controller')();

router.get('/get', estatistica_controller.get);
router.post('/post', estatistica_controller.post);
router.put('/update/:id', estatistica_controller.alterar);
router.get('/getById/:id', estatistica_controller.getById);
router.delete('/delete/:id', estatistica_controller.delete);

module.exports = router;