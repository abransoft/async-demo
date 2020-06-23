//
// Promises in Parallel (parallel != concurrency)
//
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        // resolve(1);
        reject(new Error('because something failed.'));
    }, 2001);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

// Getting all the promised results (in parallel)
// if one of those promise get rejected then Promise.all() will return rejected.
// const result = Promise.all([p1, p2]); // or Promisse.all([p1,p2]).then(...); 

// Getting the result of the first promise finished (in parallel)
const result = Promise.race([p1, p2]);

result
    .then(r => console.log(r))
    .catch(err => console.log('Error:', err.message));

// 
// Settled Promises
//
const settledPromise = Promise.resolve({ id: 1, name: 'myName' });
//const settledPromise = Promise.reject(new Error('Error purpose.'));

settledPromise
    .then(result => console.log(result))
    .catch(err => console.log(err));


