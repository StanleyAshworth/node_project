const { Router } = require("express");
const Product = require("../models/product");
const checkAuth = require('../middlewares/checkAuth');
const router = new Router();

// router pour l'entité product


router.get("/product", checkAuth, async (req, res, next) => {
    //res.status(200).send(JSON.stringify(product));
    if (req.productId) {
      req.query.id = req.productId;
    }
    res.json(
      await Product.findAll({
        where: req.query,
      })
    );
  });
  

  // CRUD 

  // Create 
  router.post("/product", async (req, res, next) => {
    try {
      res.status(201).json(await Product.create(req.body));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  

  // Read 
  router.get("/product/:id", async (req, res, next) => {
    const product = await Product.findByPk(parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      //res.status(404).end();
      res.sendStatus(404);
    }
  });
  

  // Update 
  router.patch("/product/:id", checkAuth, async (req, res, next) => {
    if (req.productId !== parseInt(req.params.id)) res.sendStatus(403);
    try {
      const result = await Product.update(req.body, {
        where: {
          id: parseInt(req.params.id),
        },
        individualHooks: true,
      });
      if (result[0] === 0) {
        res.sendStatus(404);
      } else {
        res.json(await Product.findByPk(parseInt(req.params.id)));
      }
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  

  // Delete
  router.delete("/product/:id", checkAuth, async (req, res, next) => {
    const result = await Product.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.sendStatus(result === 0 ? 404 : 204);
  });
  
  router.put("/product/:id", async (req, res, next) => {
    try {
      const result = await Product.destroy({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res
        .status(result === 1 ? 200 : 201)
        .json(await Product.create({ ...req.body, id: parseInt(req.params.id) }));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });
  
  module.exports = router;