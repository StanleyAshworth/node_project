const { Router } = require("express");
const Post = require("../models/Post");
const checkAuth = require('./middlewares/checkAuth');
const router = new Router();

// router pour l'entité post


router.get("/post", checkAuth, async (req, res, next) => {
    //res.status(200).send(JSON.stringify(post));
    if (req.postId) {
      req.query.id = req.postId;
    }
    res.json(
      await Post.findAll({
        where: req.query,
      })
    );
  });
  

  // CRUD 

  // Create 
  router.post("/post", async (req, res, next) => {
    try {
      res.status(201).json(await Post.create(req.body));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  

  // Read 
  router.get("/post/:id", async (req, res, next) => {
    const post = await Post.findByPk(parseInt(req.params.id));
    if (post) {
      res.json(post);
    } else {
      //res.status(404).end();
      res.sendStatus(404);
    }
  });
  

  // Update 
  router.patch("/post/:id", checkAuth, async (req, res, next) => {
    if (req.postId !== parseInt(req.params.id)) res.sendStatus(403);
    try {
      const result = await Post.update(req.body, {
        where: {
          id: parseInt(req.params.id),
        },
        individualHooks: true,
      });
      if (result[0] === 0) {
        res.sendStatus(404);
      } else {
        res.json(await Post.findByPk(parseInt(req.params.id)));
      }
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  

  // Delete
  router.delete("/post/:id", checkAuth, async (req, res, next) => {
    const result = await Post.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.sendStatus(result === 0 ? 404 : 204);
  });
  
  router.put("/post/:id", async (req, res, next) => {
    try {
      const result = await Post.destroy({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res
        .status(result === 1 ? 200 : 201)
        .json(await Post.create({ ...req.body, id: parseInt(req.params.id) }));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  
  module.exports = router;