//Async functions for user profile, posts, and comments
async function userProfile() {
    console.log("Getting user profile...");
    new Promise (resolve => { 
        setTimeout(() => {
            console.log("User profile retrieved.");
            resolve();
        }, 1000);
    });
}

async function userPosts() {
    console.log("Getting user posts...");
    new Promise (resolve => {
        setTimeout(() => {
            console.log("User posts retrieved.");
            return resolve();
        }, 2000);
    });
}

async function userComments() {
    console.log("Getting user comments...");
    new Promise (resolve => {
        setTimeout(() => {
            console.log("User comments retrieved.");
            return resolve();
        }, 3000);
    });
}
//Log
userProfile();
userPosts();
userComments();


//The ways of Sequential
let seqPromise = new Promise(resolve => {
    resolve("UserDetails");
});
seqPromise.then(() => {
    console.log('Getting user profile...');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('User profile retrieved.');
            resolve();
        }, 1000);
    });
});
seqPromise.then(() => {
    console.log('Getting user posts...');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('User posts retrieved.');
            resolve();
        }, 2000);
    });
});
seqPromise.then(() => {
    console.log('Getting user comments...');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('User comments retrieved.');
            resolve();
        }, 3000);
    });
});


//The Parallel way
let parPromise = new Promise(resolve => {
    resolve("UserDetails");
});
const paraPromise = new Promise(resolve => {
    new Promise(resolve => {
        console.log('Getting a users profile...');
        setTimeout(() => {
            console.log('A users profile was retrieved.');
            resolve();
        }, 1000);
    });
    new Promise(resolve => {
        console.log('Getting a users posts...');
        setTimeout(() => {
            console.log('A users posts were retrieved.');
            resolve();
        }, 2000);
    });
    new Promise(resolve => {
        console.log('Getting a users comments...');
        setTimeout(() => {
            console.log('A users comments were retrieved.');
            resolve();
        }, 3000);
    });
});


//Async/await/modified for error
async function userDetails() {
    try {
        console.log("Grabbing user profile...");
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const profile = true;
                if (profile) {
                    console.log("User profile grabbed.");
                    resolve();
                } else {
                    reject("ERROR! User profile not found.");
                }
            }, 1000);
    });
    } catch (error) {
        console.log(error);
    }
    try {
        console.log("Grabbing user posts...");
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const posts = false;
                if (posts) {
                    console.log("User posts grabbed.");
                    resolve();
                } else {
                    reject("ERROR! User posts not found.");
                }
            }, 3000);
        });
    } catch (error) {
        console.log(error);
    }
    try {
        console.log("Grabbing user comments...");
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const comments = true;
                if (comments) {
                    console.log("User comments grabbed.");
                    resolve();
                } else {
                    reject("ERROR! User comments not found.");
                }
            }, 2000);
        });
    } catch (error) {
        console.log(error);
    }
}
//logged
userDetails();


//Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Chaining Async Fun
function getUserContent() {
    async function userProfile() {
        console.log('Getting user profile...');
        await delay(3000);
        console.log('User profile retrieved.');
    }
    async function userPosts() {
        console.log('Getting user posts...');
        await delay(2000);
        console.log('User posts retrieved.');
    }
    async function userComments() {
        console.log('Getting user comments...');
        await delay(1000);
        console.log('User comments retrieved.');
    }
    userProfile();
    userPosts();
    userComments();
}
//logged to console
getUserContent();