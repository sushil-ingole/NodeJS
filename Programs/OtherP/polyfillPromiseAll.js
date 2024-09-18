const myPromiseAll = (allPromises) => {
    return new Promise((resolve, reject) => {
      let resultArray = [];
      let resolvedCount = 0;
      allPromises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
            resultArray[index] = value;
            resolvedCount++;
            if(resolvedCount === allPromises.length) {
                resolve(resultArray);
            }
        }).catch((err) => {
            reject(err);
        });
      });
      if(allPromises.length === 0) resolve([]);
    });
  };
  
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));

const promise2 = new Promise((resolve) => resolve(2));

const promise3 = new Promise((resolve) => setTimeout(() => resolve(1), 4000));
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000));

const promiseAll = myPromiseAll([promise1, promise2, promise3, promise4]);
  
promiseAll.then((result) => {
    console.log(result);   // [ 1, 2, 1, 3 ]
});