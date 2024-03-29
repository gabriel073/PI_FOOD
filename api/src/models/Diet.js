const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Diet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.ENUM('Gluten Free', 'Dairy Free', 'Ketogenic', 'Vegetarian', 'Lacto Ovo Vegetarian', 'Vegan', 'Pescatarian', 'Paleo', 'Primal', 'FODMAP', 'Whole 30'),
      unique: true,
      allowNull: false,
    }
  });
};

