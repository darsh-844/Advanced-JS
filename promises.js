const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            id: 29032030,
            name: "John Doe",
        });
    }
    else {
        reject({
            error: "Something went wrong",
        });
    }
});

// promise1.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// });

const promise2 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {  
        resolve({
            id: 29032031,
            name: "Jane Doe",
        });
    }
    else {
        reject({
            error: "Something went wrong",
        });
    }
});


Promise.all([promise1, promise2]).then((responses) => {
    console.log(responses);
}).catch((error) => {
    console.log(error);
});