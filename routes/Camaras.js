const express = require('express');
const router = express.Router();
const CamController = require('../controllers/cam.controller');
router.get('/cam/:id_camara/unidad/:id_unidad', CamController.get);
module.exports = router;

