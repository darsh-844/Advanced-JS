//USES POOLING

const fs=require('fs');

const watcher=fs.watchFile('index.txt',{interval:10000},(curr, prev)=>{
    console.log('Current: ' ,curr.birthtime.toISOString());
    console.log('Previous: ' ,prev.birthtime.toISOString());
});

