const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class Post extends Model {}

//cette entité sert à gerer les posts sur le site 

Post.init(
  {
    title : DataTypes.STRING,
    content : DataTypes.TEXT,
    creation : DataTypes.DATE, // date de reation
    update : DataTypes.DATE, // derniere maj
    },
    
  {
    sequelize: connection,
  }
);

post.belongsTo(User, { foreignKey : 'authorId' } );

module.exports = Post;
