// import http from 'http';

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Yoooooooö");
    
    const order={
        orderId: 9942,
        des: "Delhi",
        source: "Mumbai",
        username: "Darsh",
    }

    // res.statusCode = 201;
    // res.setHeader("Content-Type" , "application/json");

    res.writeHead(200, {
        'Content-Type': 'application/json', 
        'Custom-Header': 'Darsh',
        'accept-charset': 'utf-8',
    });
    res.end(JSON.stringify(order));
});

// Status Code: 200 - ok
// Status Code: 201 - create
// Status Code: 400 - bad request
// Status Code: 401 - unauthorized
// Status Code: 403 - forbidden
// Status Code: 404 - not found
// Status Code: 500 - internal server error

server.listen(5500,"127.0.0.1",()=>{
    console.log("Server is running on port 5500");
})