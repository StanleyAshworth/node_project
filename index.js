const express = require('express');

const app = express()

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(8080, () => {
  console.log("serveur en écoute");
});