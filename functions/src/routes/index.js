import * as express from 'express';

const router = express.Router();

const pelada_router = require("./pelada.routes");

router.use("/pelada", pelada_router);

module.exports = router;