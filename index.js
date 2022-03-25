const connectToMongo = require('./db')
require('dotenv').config()
const express = require('express')

const authRoute = require('./routes/auth')
const portfolioRoute = require('./routes/Portfolio')
const watchlistRoute = require('./routes/Watchlist')

connectToMongo();
app.get("/",(req,res)=>{
    res.send("Express Backendbthis is right behind you !")
  })
  app.use('/api/auth', authRoute)
  app.use('/api/portfolio', portfolioRoute)
  app.use('/api/watchlist', watchlistRoute)
  
  
