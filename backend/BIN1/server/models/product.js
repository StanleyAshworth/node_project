const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class product extends Model {}

product.init(
  {
    // ce que produit 1 contient  
    P1: {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price : DataTypes.FLOAT,
      creation : DataTypes.DATE, // date de creation 
      update : DataTypes.DATE, // date de maj 
      },

    P2: { //pareil pour le produit 2 etc
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price : DataTypes.FLOAT,
      creation : DataTypes.DATE,
      update : DataTypes.DATE,
      },

      P3: {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price : DataTypes.FLOAT,
        creation : DataTypes.DATE,
        update : DataTypes.DATE,
        },

  },
  {
    sequelize: connection,
  }
);

product.belongsTo(User, { foreignKey : 'ownerId' } );

module.exports = product;
