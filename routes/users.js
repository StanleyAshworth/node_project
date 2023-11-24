const {Router} = require("express");
const product = require("../models/product");
const router = new Router();


router.get('/products', async (req, res, next) => {
    res.json(
        await product.findAll({
            where: req.query,
        })
    );
});

router.post('/products', async (req, res, next) => {
    try {
    res.status(201).json(await product.create(req.body))
    } catch (err) {
        res.status(422).json({
            email: err.message,
        });
    }
});

router.get("/product/:id", async (req, res, next) => {
    const product = await product.findByPk (req.params.id);
    if(product) {
        res.json(product);
    }else {
        res.sendStatus(404);
    }
});

router.patch("/product/:id", async (req, res, next) => {
    try {
        const result = await product.update(req, body, {
            where: {
                id: parseInt(req.params.id),
            },
        });
        if(result[0] === 0) {
            res.sendStatus(404);
        }else {
            res.json(await product.findByPk(parseInt(req.params.id)));
        }
    } catch (err) {
        res.status(422).json({
            email: err.message,
        });
    }
});

router.delete('/products/:id', async (req,res,next) => {
    const result = await product.destroy({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.sendStatus(result === 0 ? 404 : 204);
});

router.put("/products/:id", async (req, res, next) => {
    try {
      const result = await product.destroy({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res
        .status(result === 1 ? 200 : 201)
        .json(await product.create({ ...req.body, id: parseInt(req.params.id) }));
    } catch (err) {
      res.status(422).json({
        email: err.message,
      });
    }
  });

module.exports = router;