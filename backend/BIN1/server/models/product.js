const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class product extends Model {}

product.init(
  {
    P1: {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price : DataTypes.FLOAT,
      creation : DataTypes.DATE,
      update : DataTypes.DATE,
      },

    P2: {
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
