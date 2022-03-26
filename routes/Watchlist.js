const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Watchlist = require('../Models/Watchlist')
const { body, validationResult } = require('express-validator');
router.get('/fetchallwatchlists', fetchuser, async (req, res) => {

    try {
        const watchlists = await Watchlist.find({ user: req.user.id });
        res.json(watchlists)

    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})
