const express = require('express');
const Url = require('../models/Url');
const router = express.Router();

router.get('/redirect/:shortPath', async (req, res) => {
    try {
        const { shortPath } = req.params;

        const shortUrl = `http://localhost:3000/${shortPath}`

        let originalUrl = await Url.findOne({ 'shortenedUrl': shortUrl})

        res.redirect(originalUrl.originalUrl)

    } catch (error) {
        res.json({success: false})
    }

})
module.exports = router