/**
 * CREATION D'UN CRUD DE GESTION DES PRODUITS
 * 
 * UN PRODUIT EST QUALIFIE PAR :
 * - Un nom
 * - Une description min 50 caractères
 * -Un prix > 0
 * Une quantité en stock > 0
 * - Une catégorie compris entre ['alimentation', 'hygiène', 'entretien', 'autre']
 */

const bcrypt = require("bcryptjs");
const { Model, DataTypes } = require("sequelize");
const connection = require("./dbP");
class product extends Model {}

product.init({
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [50, Infinity]
    }
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  quantiteEnStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['alimentation', 'hygiène', 'entretien', 'autre']]
    }
  }
}, {
  sequelize: connection
});

module.exports = product;


