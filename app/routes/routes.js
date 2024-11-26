const express = require('express');
const router = express.Router();
const getAllDataController = require('../controllers/getAllDataController');

// Rota para pegar os dados de todas as tabelas
router.get('/dados-completos', getAllDataController.getAllData);

module.exports = router;
