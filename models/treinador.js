'use strict';

module.exports = (sequelize, DataTypes) => {
  const Treinador = sequelize.define('Treinador', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false, 
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    nivel: {
      type: DataTypes.STRING, 
      allowNull: false, 
    },
  }, {
    tableName: 'Treinadores', 
    timestamps: true, 
  });

  Treinador.associate = (models) => {
    Treinador.hasMany(models.Pokemon, {
      foreignKey: 'treinadorId', 
      as: 'pokemons', 
    });
  };

  return Treinador;
};
