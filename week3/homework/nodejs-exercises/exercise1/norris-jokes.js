const express = require('express')
const fetch = require('node-fetch');
const app = express()

app.get('/', function (req, res) {

    fetch('http://api.icndb.com/jokes/random/')
    .then(res => res.json())
    .then(data => {
        const joke = data.value.joke
        res.send(`<h1>${joke}</h1>`);

    })
})
app.listen(3002); 