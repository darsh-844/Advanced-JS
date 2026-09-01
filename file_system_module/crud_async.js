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

const updateData = "Hello , Aarushi";
fs.appendFile("notes.txt", `\n${updateData}`, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("file updated successfully.");
});

