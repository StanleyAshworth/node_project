const express = require("express");
require('./models/db');

//utilisation des entités dans le fichier principal
const UsersRouter = require("./routes/Userdb");
const productRouter = require("./routes/productdb");
const postRouter = require("./routes/postdb");
const commentRouter = require("./routes/commentdb");

const SecurityRouter = require("./routes/security");
const db = require('./models/db');

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

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
