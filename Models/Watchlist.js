const mongoose = require('mongoose');
const { Schema } = mongoose;

const WatchlistSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    coinid: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('watchlist',WatchlistSchema)