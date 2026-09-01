const fs = require('fs');

function sizeChecker(filename){
    const stats = fs.statSync(filename);
    const limit = 2*1024*1024; // 2MB in bytes

if(stats.size > limit){
    console.log("The file should be less than 2MB");
}
else{
    console.log("The file has been submitted successfully");}
}

sizeChecker("notes.txt");



















// const nums = [1, 2, 3, 4, 5]

// nums.map((nums, index)=>{
//     console.log(`Number ${index+1}: ${nums*2}`);
// })

// nums.filter((num, index)=>{
//     if (num >2){
//             console.log(num);
//             }
//     }
// )







