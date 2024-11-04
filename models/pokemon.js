'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
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
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    treinadorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Treinador',
        key: 'id',            
      },
      allowNull: true,
    },
  }, {
    tableName: 'Pokemons', 
    timestamps: true, 
  });

  Pokemon.associate = (models) => {
    Pokemon.belongsTo(models.Treinador, {
      foreignKey: 'treinadorId', 
      as: 'treinador', 
    });
  };

  return Pokemon;
};