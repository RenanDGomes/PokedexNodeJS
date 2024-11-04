const express = require('express');
const { sequelize } = require('./models');
const treinadorRoutes = require('./routes/treinadorRoutes');
const pokemonRoutes = require('./routes/pokemonRoutes');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware para dados JSON e formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS e views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.use('/treinadores', treinadorRoutes);
app.use('/pokemons', pokemonRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.render('inicio'); 
});

// Sincronização com o banco e inicialização do servidor
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    })
    .catch((error) => {
        console.error('Erro ao sincronizar com o banco de dados:', error);
    });
