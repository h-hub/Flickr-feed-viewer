const express = require('express');
const app = express();
const path = require('path');
const rssFeedRouter = require('./rssFeed/index')

app.use(express.static(__dirname + '/dist/flickr-feed-viewer'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/home', (req,res) => res.sendFile(path.join(__dirname + '/dist/flickr-feed-viewer/index.html')));

app.use('/api', rssFeedRouter) ;

module.exports = app;