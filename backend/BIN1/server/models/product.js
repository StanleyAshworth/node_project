const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// import d'User
const User = require("./User");

class Product extends Model {}

Product.init(
 { 
  Name: {  
    type: DataTypes.STRING,
    allowNull: false, // le produit a forcément un nom
    unique: true, // un seul produit porte ce nom
  },
  Description: {
    type: DataTypes.TEXT,
  },
  Price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Creation: {
    type: DataTypes.DATE,
  },
  Update: {
    type: DataTypes.DATE,
  },
},
  {
    sequelize: connection,
  }
);

Product.belongsTo(User, { foreignKey: 'ownerId' });

module.exports = Product;
