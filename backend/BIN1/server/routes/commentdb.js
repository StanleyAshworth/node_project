const { Router } = require("express");
const Comment = require("../models/Comment");
const checkAuth = require('./middlewares/checkAuth');
const router = new Router();

// router pour l'entité Comment


router.get("/comment", checkAuth, async (req, res, next) => {
    //res.status(200).send(JSON.stringify(comment));
    if (req.commentId) {
      req.query.id = req.commentId;
    }
    res.json(
      await Comment.findAll({
        where: req.query,
      })
    );
  });
  

  // CRUD 

  // Create 
  router.post("/comment", async (req, res, next) => {
    try {
      res.status(201).json(await Comment.create(req.body));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  

  // Read 
  router.get("/comment/:id", async (req, res, next) => {
    const comment = await Comment.findByPk(parseInt(req.params.id));
    if (comment) {
      res.json(comment);
    } else {
      //res.status(404).end();
      res.sendStatus(404);
    }
  });
  

  // Update 
  router.patch("/comment/:id", checkAuth, async (req, res, next) => {
    if (req.commentId !== parseInt(req.params.id)) res.sendStatus(403);
    try {
      const result = await Comment.update(req.body, {
        where: {
          id: parseInt(req.params.id),
        },
        individualHooks: true,
      });
      if (result[0] === 0) {
        res.sendStatus(404);
      } else {
        res.json(await Comment.findByPk(parseInt(req.params.id)));
      }
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  

  // Delete
  router.delete("/comment/:id", checkAuth, async (req, res, next) => {
    const result = await Comment.destroy({ // on delete le comment pas le user
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.sendStatus(result === 0 ? 404 : 204);
  });
  
  router.put("/comment/:id", async (req, res, next) => {
    try {
      const result = await Comment.destroy({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res
        .status(result === 1 ? 200 : 201)
        .json(await Comment.create({ ...req.body, id: parseInt(req.params.id) }));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  
  module.exports = router;