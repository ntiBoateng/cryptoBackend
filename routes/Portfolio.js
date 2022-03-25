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
