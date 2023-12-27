const express = require("express");
require('./backend/BIN1/server/models/db');

//utilisation des entités dans le fichier principal
const UsersRouter = require("./backend/BIN1/server/routes/Userdb");
const productRouter = require("./backend/BIN1/server/routes/productdb");
const postRouter = require("./backend/BIN1/server/routes/postdb");
const commentRouter = require("./backend/BIN1/server/routes/commentdb");

const SecurityRouter = require("./backend/BIN1/server/routes/security");
const db = require('./backend/BIN1/server/models/db');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.post("/", (req, res, next) => {
  res.send("Hello world from POST : " + JSON.stringify(req.body));
});

app.put("/", (req, res, next) => {
  res.send("Hello world from PUT : " + JSON.stringify(req.body));
});

// on utilise les bases de données de nos entités
app.use(UsersRouter);
app.use(productRouter);
app.use(postRouter);
app.use(commentRouter);

app.use(SecurityRouter);

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
