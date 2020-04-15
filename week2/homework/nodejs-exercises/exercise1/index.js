'use strict';

const express = require('express');
const fs = require("fs");
const app = new express(); 
app.use(express.json());


// Creating new posts
app.post('/blogs', (req, res) => {
    //get the title and content from the request
    const title = req.body.title;
    const content = req.body.content;

    fs.writeFileSync(title, content);
    res.end('done')
});

// Updating existing posts
app.put('/blogs', (req, res) => {
    // get the tile and content from the request
    const title = req.body.title;
    const content = req.body.content;

    if (fs.existsSync(title)) {
        fs.writeFileSync(title, content);
        res.end('ok')
      }
      else {
        res.end('post does not exist');
      }
});

// Deleting posts
app.delete('/blogs/:title', (req, res) => {
    //get the tilte from the url parameters
    const title = req.params.title;

    if (fs.existsSync(title)) {
        fs.unlinkSync(title);
        res.end('ok')
      }
      else {
        res.end('post does not exist');
      }
});

// Reading posts
app.get('/blogs/:title', (req, res) => {
    //get the tilte from the url parameters
    const title = req.params.title;

    if (fs.existsSync(title)) {
        res.sendfile(title);
      }
      else {
        res.end('post does not exist');
      }
});

//the server listens on port 3000
app.listen(3000);
