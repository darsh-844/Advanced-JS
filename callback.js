function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    const user = { id: 1, username: "Zlatan" };
    callback(null, user);
  }, 1000);
}

function getProfile(id, callback) {
  setTimeout(() => {
    console.log("Reading a profile from a database...");
    const profile = { id: 1, userId: 1, bio: "I am Zlatan" };
    callback(null, profile);
  }, 1000);
}

function getPosts(username, callback) {
  setTimeout(() => {
    console.log("Reading posts from the database...");
    const posts = [
      "Post 1", "Post 2", "Post 3"
    ];
    callback(null, posts);
  }, 1000);
}

getUser(1, function(error, user) {
  if (error) {
    console.log(error);
    return;
  }
  getProfile(user.id, function(error, profile) {
    if (error) {
      console.log(error);
      return;
    }
    getPosts(user.Username, function(error, posts)  { 
      if (error) {
        console.log(error);
        return;
      }
      console.log(`Fetched user: ${posts}`);
    });
  });
});