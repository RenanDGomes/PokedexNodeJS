const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('treinadores', { treinadores });  
};

const getTreinador = (req, res) => {  
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    const pokemons = pokemonModel.getPokemons();
    if (treinador) {
        if (!treinador.pokedex) {
            treinador.pokedex = []; 
        }
        res.render('treinador', { treinador, pokemons });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

const createTreinador = (req, res) => {
    const { nome, nivel } = req.body; 
    if (!nome || !nivel) {
        return res.status(400).send('Nome e nível são obrigatórios');
    }
    const newTreinador = treinadorModel.createTreinador(nome, nivel); 
    res.redirect('/'); 
};

const addPokemonToTreinador= (req,res) => {
    const  treinadorId = req.params.id;
    const { pokemonId } = req.body;
    const pokemon = pokemonModel.getPokemonById(pokemonId);
    if (pokemon) {
        treinadorModel.addPokemonToPokedex(treinadorId, pokemon);
        res.redirect(`/${treinadorId}`);
    } else {
        res.status(404).send('Pokémon não encontrado')
    }
}; 

module.exports = { getAllTreinadores, getTreinador, createTreinador, addPokemonToTreinador };
