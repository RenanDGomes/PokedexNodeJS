const { Pokemon } = require('../models');

exports.getAllPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll();
        res.render('pokemons', { pokemons });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar Pokémons' });
    }
};

exports.createPokemon = async (req, res) => {
    const { nome, tipo, treinadorId } = req.body;
    try {
        const novoPokemon = await Pokemon.create({ nome, tipo, treinadorId });
        res.redirect('/pokemons');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Pokémon' });
    }
};

exports.getPokemonById = async (req, res) => {
    const { id } = req.params;
    try {
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) {
            return res.status(404).json({ error: 'Pokémon não encontrado' });
        }
        res.render('pokemon', { pokemon });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar Pokémon' });
    }
};
