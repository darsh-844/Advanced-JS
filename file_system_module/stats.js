const fs = require('fs');

// fs.stat("notes.txt",(err, stats)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Information of [notes.txt]", stats);
//     console.log("Size of the file:", stats.size,"Bytes");
//     console.log("Creation time of file:", stats.birthtime.toISOString().split('T'));
//     console.log("Modified time of file:", stats.mtime.toISOString().split('T'));
//     console.log("Access time of file:",stats.atime.toISOString().split('T'));
//     console.log("Change time of file:", stats.ctime.toISOString().split('T'));
//     console.log("Is file:", stats.isFile());
//     console.log("Is directory:", stats.isDirectory());
// });

fs.stat("./myfolder1",(err, stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Information of [myfolder1]", stats);
    console.log("Size of the folder:", stats.size,"Bytes");
    console.log("Creation time of folder:", stats.birthtime.toISOString().split('T'));
    console.log("Modified time of folder:", stats.mtime.toISOString().split('T'));
    console.log("Access time of folder:",stats.atime.toISOString().split('T'));
    console.log("Change time of folder:", stats.ctime.toISOString().split('T'));
    console.log("Is file:", stats.isFile());
    console.log("Is directory:", stats.isDirectory());
    }
)