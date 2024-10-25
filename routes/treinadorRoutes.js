const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/', treinadorController.getAllTreinadores); // Rota para obter todos os Treinadores
router.post('/', treinadorController.createTreinador); // Rota para adicionar um Treinador
router.get('/:id', treinadorController.getTreinador); // Rota para obter Treinador por ID

module.exports = router;