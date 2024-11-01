const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes');
const treinadorRoutes = require('./routes/treinadorRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/pokemons', pokemonRoutes);
app.use('/', treinadorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});