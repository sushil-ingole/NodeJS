// In JavaScript, you can run multiple promises concurrently using several techniques. The most common and effective way is to use Promise.all, Promise.allSettled, Promise.race, or Promise.any, depending on your specific requirements. Here's how each of these methods works:

// 1. Promise.all
// Promise.all runs multiple promises concurrently and waits for all of them to resolve. If any of the promises reject, Promise.all rejects with that reason.
// const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'First'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Second'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Third'));

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results); // ["First", "Second", "Third"]
//     })
//     .catch((error) => {
//         console.error('One of the promises rejected:', error); // One of the promises rejected: ReferenceError: reject is not defined
//     });
// OUTPUT:-
// [ 'First', 'Second', 'Third' ]

// 2. Promise.allSettled
// Promise.allSettled runs multiple promises concurrently and waits for all of them to settle(either resolve or reject).It returns an array of objects describing the outcome of each promise.
// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Second'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

// Promise.allSettled([promise1, promise2, promise3])
//     .then((results) => {
//         results.forEach((result, index) => {
//             if (result.status === 'fulfilled') {
//                 console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
//             } else {
//                 console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
//             }
//         });
//     });
// OUTPUT:-
// Promise 1 fulfilled with value: First
// Promise 2 rejected with reason: Second
// Promise 3 fulfilled with value: Third

// 3. Promise.race
// Promise.race runs multiple promises concurrently and resolves or rejects as soon as one of the promises resolves or rejects.
// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

// Promise.race([promise1, promise2, promise3])
//     .then((result) => {
//         console.log('First promise to resolve:', result); // "First"
//     })
//     .catch((error) => {
//         console.error('First promise to reject:', error);
//     });
// OUTPUT:-
// First promise to resolve: First

// 3. Promise.any
// Promise.any runs multiple promises concurrently and resolves as soon as one of the promises resolves. If all promises reject, Promise.any rejects with an AggregateError.
// const promise1 = new Promise((resolve, reject) => setTimeout(reject, 100, 'First'));
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Second'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'));

// Promise.any([promise1, promise2, promise3])
//     .then((result) => {
//         console.log('First promise to resolve:', result); // "Third"
//     })
//     .catch((error) => {
//         console.error('All promises rejected:', error.errors);
//     });
// OUTPUT:-
// First promise to resolve: Third
