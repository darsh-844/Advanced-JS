import fs from "fs";

// setTimeout(() => {
//   console.log("This message is displayed after 2 seconds");
// }, 2000);

// fs.readFile("intro.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
// });

// setInterval(() => {
//   console.log("This message is displayed every 3 seconds");
// }, 3000);   

// setImmediate(() => {
//   console.log("This message is displayed immediately after the current event loop phase");
// });

fs.readFile("intro.txt", "utf8", (err, data) => {
    console.log("File read completed");
    setTimeout(() => {
        console.log("This message is displayed after 2 seconds");
    }, 0);

    setImmediate(() => {
        console.log("This message is displayed immediately after the current event loop phase");
    });
});