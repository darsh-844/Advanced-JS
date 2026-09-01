import fs from 'fs'

fs.stat("notes.txt",(err, stats)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Information of [notes.txt]", stats);
    console.log("Size of the file:", stats.size,"Bytes");
    console.log("Creation time of file:", stats.birthtime.toISOString().split('T'));
    console.log("Modified time of file:", stats.mtime.toISOString().split('T'));
    console.log("Access time of file:",stats.atime.toISOString().split('T'));
    console.log("Change time of file:", stats.ctime.toISOString().split('T'));
    console.log("Is file:", stats.isFile());
    console.log("Is directory:", stats.isDirectory());
});