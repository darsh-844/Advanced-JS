console.log("===================== Synchronous Start ========================");

for (let i=0; i<10; i++){
    console.log(`${i}`);
}

console.log("===================== Synchronous End ========================");

console.log("===================== Asynchronous Start ========================");

setTimeout(()=>{
    console.log("This is a message from setTimeout");
}, 1000);

console.log("===================== Asynchronous End ========================");