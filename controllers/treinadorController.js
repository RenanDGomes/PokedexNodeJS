const treinadorModel = require('../models/treinadorModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('treinadores', { treinadores });  
};

const getTreinador = (req, res) => {  
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
    res.redirect('/'); 
};

module.exports = { getAllTreinadores, getTreinador, createTreinador };