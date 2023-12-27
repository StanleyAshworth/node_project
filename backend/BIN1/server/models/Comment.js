const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

// import de l'entité User
const User = require("./User");

class Comment extends Model {}

// entité qui sert à laisser des message/des avis sous les produits

Comment.init(
  {
    text: {
      type : DataTypes.Text,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
  }
);

Comment.belongsTo(User, { foreignKey : 'authorId' } );
Comment.belongsTo(User, { foreignKey : 'postId' } );

module.exports = Comment;
