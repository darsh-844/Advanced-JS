import http from 'http';
import fs from 'fs';

const home = fs.readFileSync('./index.html', 'utf8');
const data = fs.readFileSync('./contact.html', 'utf8');
const hero = fs.readFileSync('./about.html', 'utf8');
const lol = fs.readFileSync('./service.html', 'utf8');

const server = http.createServer((req, res) => {
    console.log("Yoooooooö");
    console.log(req.url);
    if (req.url === '/') {
        res.end(home.replace("{{%CONTENTS%}}", "Home Page"));
    } else if (req.url === '/about') {
        res.end(hero);
    } else if (req.url === '/contact') {
        res.end(data);
    } else if (req.url === '/service') {
        res.end(lol);
    }
    else {
        res.end("404 - Page Not Found");
    }
});

server.listen(5500, "127.0.0.1", () => {
    console.log("Server is running on port 5500");
});