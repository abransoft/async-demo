// Callbacks
// Promises
// Async/await
console.log('Before');

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => console.log(repos))
    .catch(err => console.log('Error', err.message));

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...');
            resolve({ id: id, gitHubUsername: 'marcio' });
            reject(new Error('Cannot get user'));
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading repositories from gitHub:', username);
            resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Cannot get repos'));
        }, 2000);
    });
}

