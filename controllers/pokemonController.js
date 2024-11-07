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


exports.deletePokemon = async (req,res) => {
    const { id } = req.params;
    console.log('Tentando deletar Pokémon com id:', id); 
    try {
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) {
            return res.status(404).json({ error: 'Erro ao buscar pokemon para deleção'})
        }
        await pokemon.destroy();
        res.redirect('/pokemons');    
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao deletar pokemon'})
    }
};

// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('apipokedex', 'postgres', 'camaro01', {
//   host: '127.0.0.1',
//   dialect: 'postgres'
// });

// module.exports = sequelize;





// {
//   "development": {
//     "username": "postgres",
//     "password": "camaro01",
//     "database": "apipokedex",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "postgres",
//     "password": "camaro01",
//     "database": "apipokedex",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "postgres",
//     "password": "camaro01",
//     "database": "apipokedex",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }

