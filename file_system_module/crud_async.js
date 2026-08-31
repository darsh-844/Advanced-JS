const fs = require("fs");
fs.writeFile("notes.txt", "Hello, World!", (err) => {
    if (err) {
        console.error (err);
        return;
    }
    console.log("File created successfully.");
});

fs.readFile("notes.txt", "utf8", (err, data) => {
 if (err) {
        console.error(err);
        return;
    }
    console.log("Read data from notes.txt:", `${data}`);
});     

const updateData = "hello , ece 3rd sem";
fs.appendFile("notes.txt", `\n${updateData}`, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("file updated successfully.");
});

// fs.rm("notes.txt", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }   
//     console.log("File deleted successfully.");
// });