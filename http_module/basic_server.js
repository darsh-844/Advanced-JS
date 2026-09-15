// Status Code: 200 - ok
// Status Code: 201 - create
// Status Code: 400 - bad request
// Status Code: 401 - unauthorized
// Status Code: 403 - forbidden
// Status Code: 404 - not found
// Status Code: 408 - request timeout
// Status Code: 411 - length required
// Status Code: 500 - internal server error

// import http from 'http';
// import fs from 'fs';

const http = require('http');
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('./index.html', 'utf8');

const server = http.createServer((req, res) => {

    console.log("Yoooooooö");
    console.log(`${data}`);

    // const order = {
    //     orderId: 9942,
    //     des: "Delhi",
    //     source: "Mumbai",
    //     username: "Darsh",
    // }

    // res.statusCode = 201;
    // res.setHeader("Content-Type", "application/json");
    // res.writeHead(200, {
    //     'Content-Type': 'application/json',
    //     'Custom-Header': 'Darsh',
    //     'accept-charset': 'utf-8',
    // });

    // res.end(JSON.stringify(order));

    if (req.url === '/' || req.url === '/index.html') {

        const filePath = path.join(__dirname, 'index.html');

        fs.readFile('./index.html', 'utf8', (err, data) => {

            if (err) {
                console.log(err);

                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(data);
        });

    } else {

        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('404 - Page Not Found');
    }
});

server.listen(5500, "127.0.0.1", () => {
    console.log("Server is running on port 5500");
})