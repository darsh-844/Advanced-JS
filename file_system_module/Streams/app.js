import fs from 'fs';

// Readable Streams

const readableStream = fs.createReadStream("input.txt", "utf-8");
readableStream.on("data", (chunk) => {
  console.log("Data chunk received: ", chunk);
});

readableStream.on("end", () => {
  console.log("Finished reading the file.");
});

readableStream.on("error", (err) => {
  console.error("Error reading the file: ", err);
});

// Writable Streams

const writableStream = fs.createWriteStream("output.txt");
// writableStream.write("Hello, World!\n");
// writableStream.write("This is a writable stream example.\n");
// writableStream.end("Finished writing to the file.");

writableStream.on("finish", () => {
  console.log("Finished writing to the file.");
});

writableStream.on("error", (err) => {
  console.error("Error writing to the file: ", err);
});

readableStream.pipe(writableStream);
