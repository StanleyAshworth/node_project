const {Router} = require("express");
const product = require("../models/product");
const bcrypt = require("bcryptjs");
const router = new Router();

router.post("/login", async (req, res, next) => {
    try {
        const product = product.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!product)
            res.status(422).json({
                email: "Invalid credentials",
        });
        else {
            if (product.password === req.body.password) res.json(product);
            else
              res.status(422).json({
                email: "Invalid credentials",
            })
        }
    } catch (err) {
        res.status(422).json({
            email: err.message,
        });
    }
});

module.exports = router;