const randomMore = new Promise(function(resolve, reject) {
    let r = Math.random();
    if(r <= 0.5){
        resolve({result: 'success', randomNumber: r.toFixed(1)})
    } else {
        reject({error: 'error', randomNumber: r.toFixed(1)})
    }
})

randomMore
.then((result) => {
    console.log('Promise resolved:', result.result);
    console.log('Random number:', result.randomNumber);
})
.catch((error) => {
    console.log('Promise resolved:', error.error);
    console.log('Random number:', error.randomNumber);
})