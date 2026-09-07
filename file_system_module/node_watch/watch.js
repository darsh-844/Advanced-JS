//USES PLATFORM OS

const fs=require('fs');

// fs.watch('index.txt',(eventType,filename)=>{
//     console.log(`Event Type: ${eventType}`);
//     console.log(`Filename: ${filename}`);
// });

const watcher=fs.watch('index.txt',(eventType,filename)=>{
    console.log(`Event Type: ${eventType}`);
    console.log(`Filename: ${filename}`);
});

setTimeout(()=>{
    watcher.close();
    console.log('Stopped watching the file.');
},10000);  
