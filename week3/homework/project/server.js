'use strict';

const express = require('express');
const app =  express(); 
const exphbs  = require('express-handlebars');
const axios = require('axios');
const path = require('path')

app.use(express.static('public'));

// to let  Express aware of the templating engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// to let  aware of what data type the incoming data is
app.use(express.urlencoded({ extended: true }));


// send the index template using the render() function
app.get('/', (req, res) => { res.render("index"); });

// Create a POST route, that has as an endpoint: /weather
app.post("/weather", (req, res) => {

    // add the API Key
    const APIKEY = require('./sources/keys.json').API_KEY;
    // get the city name from the request
    const cityName = req.body.cityName;

    // Make a request to API with parameters
    axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&q=${cityName}&units=metric`)
    .then(function (response) {
        // handle success
        res.render('index', { 
            cityName: response.data.name,
            weatherText: `Temperature in ${cityName} is ${response.data.main.temp}°C` 
        });
    })
    .catch(function (error) {
        // handle error
        res.render('index', { 
            cityName: "City is not found!",
            weatherText: error.message
        });
    });

});

//the server listens on port 3000
app.listen(3000);