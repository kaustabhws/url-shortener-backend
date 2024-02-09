const express = require('express');
const Url = require('../models/Url');
const router = express.Router();

router.get('/redirect/:shortPath', async (req, res) => {
    try {
        const { shortPath } = req.params;

        const shortUrl = `https://short-back33-758faa2111ea.herokuapp.com/${shortPath}`

        let originalUrl = await Url.findOne({ 'shortenedUrl': shortUrl})

        res.redirect(originalUrl.originalUrl)

    } catch (error) {
        res.json({success: false})
    }

})
module.exports = router