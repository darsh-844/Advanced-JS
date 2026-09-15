import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    console.log("Yoooooooö");
    console.log(req.url);
    if (req.url === '/'){
    res.end("Hello from Home page!");
    } else if (req.url === '/about'){
        res.end("This is the about page");
    } else if (req.url === '/contact') {
        const data = fs.readFileSync('./contact.html', 'utf8');
        res.end(data);
    } else if (req.url === '/services') {
        res.end("This is the services page");
    }
    else {
        res.end("404 - Page Not Found");
    }
});

server.listen(5500, "127.0.0.1", () => {
    console.log("Server is running on port 5500");
});