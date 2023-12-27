const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class product extends Model {}

product.init(
  {
    // ce que produit 1 contient  
    P1: {
      name:  {
        type : DataTypes.STRING,
        allownulll : false, // le produit a forcement un nom
        unique : true, // un seul produit porte ce nom
      },
      description: DataTypes.TEXT,
      price : {
        type : DataTypes.FLOAT,
        allownulll : false,
      },
      creation : DataTypes.DATE, // date de creation 
      update : DataTypes.DATE, // date de maj 
      },

    P2: { //pareil pour le produit 2 etc
      name:  {
        type : DataTypes.STRING,
        allownulll : false, // le produit a forcement un nom
        unique : true, // un seul produit porte ce nom
      },
      description: DataTypes.TEXT,
      price : {
        type : DataTypes.FLOAT,
        allownulll : false,
      },
      creation : DataTypes.DATE, // date de creation 
      update : DataTypes.DATE, // date de maj 
      },

      P3: {
        name:  {
          type : DataTypes.STRING,
          allownulll : false, // le produit a forcement un nom
          unique : true, // un seul produit porte ce nom
        },
        description: DataTypes.TEXT,
        price : {
          type : DataTypes.FLOAT,
          allownulll : false,
        },
        creation : DataTypes.DATE, // date de creation 
        update : DataTypes.DATE, // date de maj 
        },

  },
  {
    sequelize: connection,
  }
);

product.belongsTo(User, { foreignKey : 'ownerId' } );

module.exports = product;
