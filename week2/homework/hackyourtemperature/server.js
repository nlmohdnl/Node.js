'use strict';

const express = require('express');
const app = new express(); // web server using Express
const exphbs  = require('express-handlebars');

// to let Express aware of the templating engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

// to let Express aware of what data type the incoming data is
app.use(express.urlencoded({ extended: true }));


// send the index template using the render() function
app.get('/', (req, res) => { res.render("index"); });

// Create a POST route, that has an endpoint: /weather
app.post("/weather", (req, res) => {
    //get access to the cityName and put it inside a variable
    const cityName = req.body.cityName;
    // city name validation
    if (cityName === '') {
        res.send("Please enter a correct city name !!");
    } else {
        //Send the the form input back as a response to the client
        res.render('index', {cityName})
    }

});

//the server listens on port 3000
app.listen(3000); 