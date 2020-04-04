'use strict';

var http = require('http');

//create a server
let server = http.createServer(function(req, res) {
    // the server returns JavaScript code
    if (req.url === '/script.js') {

        // set the content-type to text/javascript
        res.setHeader('Content-Type', 'text/javascript');
        //send a response back to the client
        res.write(`document
                    .getElementById('content')
                    .appendChild(document.createTextNode('Welcome to Server-land!'));`);

    // the server returns CSS code
    } else if (req.url === '/style.css') {

        // set the content-type to text/stylesheet
        res.setHeader('Content-Type', 'text/stylesheet');
        //send a response back to the client
        res.write(`#content { color: blue }`);

    // the server returns HTML code    
    } else {

        // set the content-type to text/html
        res.setHeader('Content-Type', 'text/html');
         //send a response back to the client
        res.write(`<html>
                    <head>
                    <link rel="stylesheet" type="text/css" href="style.css" />
                    <title>My First Web Server</title>
                    </head>
                    <body>
                        <h1>Hello, anyone there?</h1>
                        <div id="content"></div>
                        <script src="script.js"></script>
                    </body>
                </html>`);
    }
    res.end(); //end the response

});

server.listen(3000); //the server listens on port 3000 