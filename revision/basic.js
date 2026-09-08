console.log("Start");

console.log("hello world");

for (let i = 0; i < 5; i++) {
  console.log("Iteration: ", i);
}

setTimeout(() => {
  console.log("Timeout completed after 2 seconds");
}, 2000);

console.log("End");

console.log("Starting asynchronous operation...");

setTimeout(() => {
  console.log("Asynchronous operation completed after 3 seconds");
}, 3000);

console.log("Continuing with other tasks...");