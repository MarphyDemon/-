
// 加入了状态

function Promise(fn) {
    var promise = this,
        value = null;
        promise._resolves = [];
        promise._status = 'PENDING';

    this.then = function (onFulfilled) {
        if (promise._status === 'PENDING') {
            promise._resolves.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    };


    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                callback(value);
            })
        },0);
    }

    fn(resolve);
}

function MyPromise(fn) {
    var promise = this;
    var value = null;
    promise._resolves = [];
    promise._status = 'pedding';

    this.then = (onFulfilled) => {
        if(promise._status === 'pedding') {
            promise._resolves.push(onFulfilled)
        }
        onFulfilled(value)
        return this
    }
    resolve = (prevResult) => {
        setTimeout(() => {
            promise._status = 'fulfilled'
            promise._resolves.forEach((callback) => {
                callback(prevResult)
            })
        }, 0);
    }
    fn(resolve)
}