const express = require('express');
 
const rssFeed = require('./controller');
 
const router = express.Router();
 
router.get('/flickerFeed', rssFeed.getRssFeed);
 
module.exports = router;