const treinadorModel = require('../models/treinadorModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('treinadores', { treinadores });  // Certifique-se de que 'treinadores' é o nome correto do arquivo de visualização
};

const getTreinador = (req, res) => {  // Corrigido o nome da função
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
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
    res.redirect('/treinadores'); 
};

module.exports = { getAllTreinadores, getTreinador, createTreinador };