const connectToMongo = require('./db')
require('dotenv').config()
const express = require('express')

const authRoute = require('./routes/auth')
const portfolioRoute = require('./routes/Portfolio')
const watchlistRoute = require('./routes/Watchlist')

connectToMongo();

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())

const cors = require('cors');
app.use(cors({ origin: true }));

app.get("/",(req,res)=>{
  res.send("Express Backend this is left or right behind you !\nAll Backend database are served from here")
})

app.use('/api/auth', authRoute)
app.use('/api/portfolio', portfolioRoute)
app.use('/api/watchlist', watchlistRoute)





app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})

