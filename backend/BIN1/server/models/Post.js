const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class Post extends Model {}

Post.init(
  {
    title : DataTypes.STRING,
    content : DataTypes.TEXT,
    creation : DataTypes.DATE,
    update : DataTypes.DATE,
    },
    
  {
    sequelize: connection,
  }
);

post.belongsTo(User, { foreignKey : 'authorId' } );

module.exports = Post;
