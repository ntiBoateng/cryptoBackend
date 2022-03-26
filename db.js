const mongoose = require('mongoose')
require('dotenv').config()
//const mongoURI = "mongodb+srv://Pankaj:{shshsh}2@cluster0.uehfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoURI = "mongodb+srv://bgnti:{process.env.password}@cryptocluster.rmdtz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected")
    })
}


module.exports = connectToMongo;