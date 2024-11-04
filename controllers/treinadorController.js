// controllers/treinadorController.js
const { Treinador, Pokemon, sequelize } = require('../models');

exports.getAllTreinadores = async (req, res) => {
    try {
        const treinadores = await Treinador.findAll(); 
        res.render('treinadores', { treinadores });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao buscar treinadores' });
    }
};

exports.createTreinador = async (req, res) => {
    const { nome, nivel } = req.body;
    try {
        await Treinador.create({ nome, nivel }); 
        res.redirect('/treinadores');
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erro ao criar treinador' });
    }
};

exports.getTreinadorById = async (req, res) => {
    try {
        const treinadorId = req.params.id;
        const treinador = await Treinador.findByPk(treinadorId, {
            include: [
                {
                    model: Pokemon,
                    as: 'pokemons'  // Asegure-se de usar o alias correto
                }
            ]
        });
        
        // Verifique o conteúdo de treinador
        console.log(treinador); // Adicione esta linha

        if (!treinador) {
            return res.status(404).send('Treinador não encontrado');
        }

        const pokemons = await Pokemon.findAll();

        res.render('treinador', { treinador, pokemons });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar treinador');
    }
};



exports.addPokemonToTreinador = async (req, res) => {
    const { id } = req.params;
    const { pokemonId } = req.body;

    const transaction = await sequelize.transaction();
    try {
        const treinador = await Treinador.findByPk(id, { transaction });
        if (!treinador) {
            await transaction.rollback();
            return res.status(404).send({ error: 'Treinador não encontrado' });
        }

        const pokemon = await Pokemon.findByPk(pokemonId, { transaction });
        if (!pokemon) {
            await transaction.rollback();
            return res.status(404).send({ error: 'Pokémon não encontrado' });
        }

        await treinador.addPokemon(pokemon, { transaction });
        await transaction.commit();
        res.redirect(`/treinadores/${id}`);
    } catch (error) {
        await transaction.rollback();
        console.error(error);
        res.status(500).send({ error: 'Erro ao adicionar Pokémon' });
    }
};
