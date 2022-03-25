const connectToMongo = require('./db')
require('dotenv').config()
const express = require('express')

const authRoute = require('./routes/auth')
const portfolioRoute = require('./routes/Portfolio')
const watchlistRoute = require('./routes/Watchlist')

connectToMongo();
