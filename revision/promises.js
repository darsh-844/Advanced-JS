const promise1= new Promise ((resolve,reject)=>{
    const success = true;
    if(success){
        resolve({
            id: 29380083,
            name: "John Doe",
        });
    }
    else{
        reject({
            error: "Something went wrong",
        });
    }
})

promise1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})