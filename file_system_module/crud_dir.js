const fs = require('fs');
fs.mkdir("./myfolder1/myfolder2/myfolder3", { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Folder created successfully.");
});
fs.writeFile("hello.txt", "Hello, World!", (err) => {
    if (err) {
        console.error(err);
        return;
    }   })
fs.readdir("./myfolder", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory contents:", files);
});
