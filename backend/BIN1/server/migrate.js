const connection = require("./models/db");
require("./models/User");

connection.sync({alter: true}).then(() => console.log("Database synchronized")); //aerihgaoiegruaieurgaz

