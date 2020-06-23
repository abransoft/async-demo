//
// Exercise: Convert "Async Callbacks" code into "Async Await Promises"
//
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

displayDataUser();

async function displayDataUser() {
    try {
        const customer = await getCustomer(1);
        console.log('Customer:', customer);

        if (customer.isGold) {
            const movies = await getTopMovies(0);
            console.log('Top movies:', movies);

            await sendEmail(customer.email, movies);
        }
    } catch (err) {
        console.log('Error: ', err.message);
    }
}

function getCustomer(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Paul Etc',
                isGold: true,
                email: 'contact@paul.com'
            });
        }, 4000);
    });
}

function getTopMovies(err) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (err) {
                reject(new Error('Could not get top movies list.'));
            }
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
}

function sendEmail(email, movies) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(email, movies);
            console.log('Email sent...');
            resolve();
        }, 4000);
    });
}