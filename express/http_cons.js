import http from 'http';

const server = http.createServer((req,res) => {
    console.log('Success!!!!!!!!');
    if(req.method === 'GET' && req.url === '/'){
        res.end('GET Request');
    }
    else if (req.method === 'POST' && req.url === '/'){
        res.end('POST Request');
    }
});

server.listen( 5500, '127.0.0.1', (req,res) => {
    console.log("Server is live on '127.0.0.1:5500'. ");
});