const fs = require('fs');

fs.symlink("notes.txt", "link.txt", "dir", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Symbolic link created successfully.");
    }
);