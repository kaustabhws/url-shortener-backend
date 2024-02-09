const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://kaustabh:kaustabh@cluster0.auiguv3.mongodb.net/urlshortdb?retryWrites=true&w=majority'

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected to MongoDB successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error.message)
    }
};

module.exports = connectToMongo;