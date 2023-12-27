const { Sequelize } = require("sequelize");
const jwt = require('jsonwebtoken');

const DEFAULT_DATABASE_URL = "mysql://root:Cupcake-SQL21@localhost:3306/app"; // j'ai utilisé mon vrai mot de passe me hackez pas svp :(
// bien penser à créer la bdd dans mysql en utilisant "CREATE DATABASE IF NOT EXISTS app;" et executer la commande 
const connection = new Sequelize(
  process.env.DATABASE_URL || DEFAULT_DATABASE_URL
);

connection.authenticate().then(() => console.log("Database connected"));

module.exports = connection;