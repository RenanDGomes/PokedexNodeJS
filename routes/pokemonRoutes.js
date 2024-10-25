const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons); // Rota para obter todos os Pokémons
router.post('/', pokemonController.createPokemon); // Rota para adicionar um Pokémon
router.get('/:id', pokemonController.getPokemon); // Rota para obter Pokémon por ID

module.exports = router;