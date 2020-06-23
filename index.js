// Callbacks
// Promises
// Async/await
console.log('Before');

// Promise-based only approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => console.log(repos))
//     .catch(err => console.log('Error', err.message));


displayDataCommits();

// Async and await approach (await calls should be wrap with an async function)
async function displayDataCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        console.log(repos);
    } catch (err) {
        console.log(err.message);
    }
}

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...');
            resolve({ id: id, gitHubUsername: 'marcio' });
            //reject(new Error('Could not get the user'));
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading repositories from gitHub:', username);
            resolve(['repo1', 'repo2', 'repo3']);
            //reject(new Error('Could not get the repos'));
        }, 2000);
    });
}

