const pokemons = [
    { id: 1, nome: 'pokemon1', tipo: 'tipo1' },
    { id: 2, nome: 'pokemon2', tipo: 'tipo2' },
    { id: 3, nome: 'pokemon3', tipo: 'tipo3' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(t => t.id == parseInt(id));

const createPokemon = (nome, tipo) => {
    const newPokemon = {
        id: pokemons.length + 1,
        nome,
        tipo,
    };
    pokemons.push(newPokemon);
    return newPokemon;
};

module.exports = { getPokemons, getPokemonById, createPokemon };