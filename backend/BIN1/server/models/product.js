const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// import d'User
const User = require("./User");
class Product extends Model {}

Product.init(
  {
    // ce que produit 1 contient  
    name:  {
      type : DataTypes.STRING,
      allowNulll : false, // le produit a forcement un nom
      unique : true, // un seul produit porte ce nom
    },
    description: {
      type : DataTypes.TEXT,
    },
    price : {
      type : DataTypes.FLOAT,
      allowNulll : false,
    },
    creation : {
      type : DataTypes.DATE,
    }, // date de creation 

    update : {
      type : DataTypes.DATE,
    }, // date de maj 
  },

  {
    sequelize: connection,
  }
);

Product.belongsTo(User, { foreignKey : 'ownerId' } );

module.exports = Product;
