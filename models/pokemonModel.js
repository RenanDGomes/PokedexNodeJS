const pokemons = [
    {id: 1, none: 'Bubassauro', tipo: 'Vegetal/Veneno'},
    {id: 2, none: 'Squirtle', tipo: 'Água'},
    {id: 3, none: 'Charmandar', tipo: 'Fogo'},

];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome,tipo) => pokemons.push(pokemons.lenght+1,none,tipo)

module.exports = {getPokemons, getPokemonById, createPokemon};