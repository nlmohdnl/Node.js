'use strict';

const express = require('express');
const app = new express(); // web server using Express

// make a GET request to /
app.get('/', (req, res) => {
    //send a response back to the client
    res.send('hello from backend to frontend!');
});

//the server listens on port 3000
app.listen(3000); 