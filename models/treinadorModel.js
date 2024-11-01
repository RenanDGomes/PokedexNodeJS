const treinadores = [
    { id: 1, nome: 'Treinador 1', nivel: '10', pokedex: [] },
    { id: 2, nome: 'Treinador 2', nivel: '80', pokedex: [] },
    { id: 3, nome: 'Treinador 3', nivel: '60', pokedex: [] },
];

const getTreinadores = () => treinadores;

const getTreinadorById = (id) => treinadores.find(t => t.id == parseInt(id));

const createTreinador = (nome, nivel) => {
    const newTreinador = {
        id: treinadores.length + 1,
        nome,
        nivel,
        pokedex: []
    };
    treinadores.push(newTreinador);
    return newTreinador;
};

const addPokemonToPokedex = (treinadorId, pokemon) => {
    const treinador = getTreinadorById(treinadorId);
    if (treinador) {
        treinador.pokedex.push(pokemon);
        return true;
    }
    return false;
};

module.exports = { getTreinadores, getTreinadorById, createTreinador,addPokemonToPokedex };

// // Função para adicionar um Pokémon à Pokédex do treinador
// const addPokemonToPokedex = (treinadorId, pokemon) => {
//     const treinador = getTreinadorById(treinadorId);
//     if (treinador) {
//         treinador.pokedex.push(pokemon);
//         return true;
//     }
//     return false;
// };

// module.exports = { getTreinadores, getTreinadorById, addPokemonToPokedex };