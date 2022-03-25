const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Portfolio = require('../Models/Portfolio')
const { body, validationResult } = require('express-validator');

router.get('/fetchallportfolios', fetchuser, async (req, res) => {

    try {
        const portfolios = await Portfolio.find({ user: req.user.id });
        res.json(portfolios)

    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})

ROUTE 2: Add a new Portfolio using: POST "/api/auth/addportfolio". Login required
router.post('/addportfolio', fetchuser, async (req, res) => {
        try {

            const { coinid, amount } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const portfolio = new Portfolio({
                coinid, amount, user: req.user.id
            })
            const savedPortfolio = await portfolio.save()

            res.json(savedPortfolio)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
})
 