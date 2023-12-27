const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// import d'User
const User = require("./User");

class Product extends Model {}

Product.init(
  {
    P1: {
      type: DataTypes.STRING,
      allowNull: false, // le produit a forcément un nom
      unique: true, // un seul produit porte ce nom
    },
    P1Description: {
      type: DataTypes.TEXT,
    },
    P1Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    P1Creation: {
      type: DataTypes.DATE,
    },
    P1Update: {
      type: DataTypes.DATE,
    },
    
    P2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    P2Description: {
      type: DataTypes.TEXT,
    },
    P2Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    P2Creation: {
      type: DataTypes.DATE,
    },
    P2Update: {
      type: DataTypes.DATE,
    },

    P3: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    P3Description: {
      type: DataTypes.TEXT,
    },
    P3Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    P3Creation: {
      type: DataTypes.DATE,
    },
    P3Update: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
  }
);

Product.belongsTo(User, { foreignKey: 'ownerId' });

module.exports = Product;
