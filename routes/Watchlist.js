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

// ROUTE 2: Add a new Watchlist using: POST "/api/auth/addwatchlist". Login required
router.post('/addwatchlist', fetchuser, async (req, res) => {
    try {

        const { coinid } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const watchlist = new Watchlist({
            coinid,user: req.user.id
        })
        const savedWatchlist = await watchlist.save()

        res.json(savedWatchlist)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
