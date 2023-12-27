const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class Comment extends Model {}

// jai pas encore modifié celui la !!!!

Comment.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32],
        is: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
      },
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "Comment"],
      defaultValue: "Comment",
    },
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    dob: DataTypes.DATE,
  },
  {
    sequelize: connection,
  }
);

Comment.belongsTo(User, { foreignKey : 'authorId' } );
Comment.belongsTo(User, { foreignKey : 'postId' } );

module.exports = Comment;
