const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(1); // pending -> resolved/fulfilled state
        reject(new Error('message')); // peding -> rejected state
    }, 2000);
});

p.then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));

