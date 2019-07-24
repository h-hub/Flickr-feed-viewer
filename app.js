const express = require('express');
const app = express();
const path = require('path');
const rssFeedRouter = require('./rssFeed/index')

app.use(express.static(__dirname + '/dist/flickr-feed-viewer'));
app.get('/home', (req,res) => res.sendFile(path.join(__dirname + '/dist/flickr-feed-viewer/index.html')));

app.use('/api', rssFeedRouter) ;

module.exports = app;