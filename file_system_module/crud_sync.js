const fs =require("fs");
fs.writeFileSync("notes.txt", "Hello, World!");

const data =fs.readFileSync("notes.txt")
console.log("read data from notes.txt:", `${data}`);

fs.appendFileSync("notes.txt", "\nThis is an appended line.");

fs.rmSync("notes.txt");


