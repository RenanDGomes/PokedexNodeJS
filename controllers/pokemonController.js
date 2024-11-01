const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('pokedex', { pokemons });  
};

const getPokemon = (req, res) => {  
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokemon não encontrado');
    }
};

const createPokemon = (req, res) => {
    const { nome, tipo } = req.body; 
    if (!nome || !tipo) {
        return res.status(400).send('Nome e nível são obrigatórios');
    }
    
    const newPokemon = pokemonModel.createPokemon(nome, tipo); 
    res.redirect('/pokemons'); 
};

module.exports = { getAllPokemons, getPokemon, createPokemon };