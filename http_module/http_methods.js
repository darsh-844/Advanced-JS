import http from 'http';
import fs from 'fs';

const dom = fs.readFileSync('./config.json' , 'utf-8');
const home = fs.readFileSync('./index.html' , 'utf-8');

const server = http.createServer((req,res) => {
    console.log('Success!!!!');
    if (req.url === '/config'){
        res.writeHead( 200 , {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(dom));
    }
    else if (req.url === '/' || req.url === '/home'){
        res.end(home);
    }
    else{
    res.end('Yoooooooo');
    }
});

server.listen( 5500 , "127.0.0.1", () => {
    console.log(" Server is live on 127.0.0.1:5500.  ");
});