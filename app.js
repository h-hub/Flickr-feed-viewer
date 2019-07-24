const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/flickr-feed-viewer'));
app.get('*', (req,res) => res.sendFile(path.join(__dirname + '/dist/flickr-feed-viewer/index.html')));

module.exports = app;