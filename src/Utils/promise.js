let promise_ok = true;

const promise = (time, array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promise_ok) {
                resolve(array);
            } else {
                reject("Error in the Promise");
            }
        }, time);
    });
}

export default promise;