const express = require('express');
const Url = require('../models/Url');
const router = express.Router();

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

router.post('/shorten', async (req, res) => {
    try {
        const { originalUrl } = req.body;

        const shortPath = generateRandomString(8);
        const shortUrl = `http://localhost:3000/${shortPath}`

        user = await Url.create({
            originalUrl: originalUrl,
            shortenedUrl: shortUrl
        });

        res.json({ success: true, shortUrl: `https://short-back33-758faa2111ea.herokuapp.com/${shortPath}` })
    } catch (error) {
        res.json({success: false})
    }

})
module.exports = router
