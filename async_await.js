function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve({
                id: 29380083,
                name: "John Doe",
                email: "john.doe@example.com"
            });
        }
        else {
            reject({
                error: "Failed to fetch user data"
            });
        }
    });
}

async function getUser(){
    try {
        const userData = await fetchUserData();
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}

getUser();