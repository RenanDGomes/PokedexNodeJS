const treinadores = [
    { id: 1, nome: 'Treinador 1', nivel: '100' },
    { id: 2, nome: 'Treinador 2', nivel: '80' },
    { id: 3, nome: 'Treinador 3', nivel: '60' },
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(t => t.id == parseInt(id));

// Função atualizada para criar treinador
const createTreinador = (nome, nivel) => {
    const newTreinador = {
        id: treinadores.length + 1,
        nome,
        nivel,
    };
    treinadores.push(newTreinador);
    return newTreinador;
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };