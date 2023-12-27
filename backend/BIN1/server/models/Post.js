const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// import d'User
const User = require("./User");

class Post extends Model {}

//cette entité sert à gerer les posts sur le site 

Post.init(
  {
    title : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    content : {
      type : DataTypes.TEXT,
      allowNull : false,
    },
    creation : DataTypes.DATE, // date de reation
    update : DataTypes.DATE, // derniere maj
    },
    
  {
    sequelize: connection,
  }
);

Post.belongsTo(User, { foreignKey : 'authorId' } );

module.exports = Post;
