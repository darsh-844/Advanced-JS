console.log("Start");

console.log("hello world");

for (let i = 0; i < 5; i++) {
  console.log("Iteration: ", i);
}

setTimeout(() => {
  console.log("Timeout completed after 9 seconds");
}, 9000);

console.log("End");

console.log("Starting asynchronous operation...");

setTimeout(() => {
  console.log("Asynchronous operation completed after 3 seconds");
}, 3000);

console.log("Continuing with other tasks...");

console.log("Synchronous operation completed immediately");

Promise.resolve().then((message) => {
  console.log("Micro Task");
});

setTimeout(() => {
  console.log("Macro Task");
}, 2000);

