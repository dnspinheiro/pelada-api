import * as express from 'express';
const router = express.Router();
const pelada_controller = require('../controllers/pelada.controller')();

router.get('/get', pelada_controller.get);

module.exports = router;