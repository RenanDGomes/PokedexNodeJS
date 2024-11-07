const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.post('/', pokemonController.createPokemon);
router.get('/:id', pokemonController.getPokemonById);
router.delete('/:id', pokemonController.deletePokemon);

router.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = router;