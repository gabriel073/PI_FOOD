const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,

    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'This recipe has no summary yet'
    },
    healthScore: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
      defaultValue: 0,

    },
    steps: {
      type: DataTypes.TEXT,
      defaultValue: 'This recipe has no instructions yet'
    },
  });
};



