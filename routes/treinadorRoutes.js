const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/', treinadorController.getAllTreinadores);
router.post('/', treinadorController.createTreinador);
router.get('/:id', treinadorController.getTreinadorById);
router.post('/:id/addPokemon', treinadorController.addPokemonToTreinador);
router.delete('/:id', treinadorController.deleteTreinador);

router.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = router;
