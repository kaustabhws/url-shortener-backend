const mongoose = require('mongoose');
const { Schema } = mongoose;

const UrlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortenedUrl: {
        type: String,
    },
});
const UrlDb = mongoose.model('url', UrlSchema);
module.exports = UrlDb;