
//链式支持

function Promise(fn) {
    var promise = this;
        promise._resolves = [];

    this.then = function (onFulfilled) {
        promise._resolves.push(onFulfilled);
        return this;
    };

    function resolve(value) {
        setTimeout(function() {
            promise._resolves.forEach(function (callback) {
                callback(value);
            });
        },0);
    }

    fn(resolve);
}

function promise(fn) {
    var zpromise = this;
    this.resolves = [];
    this.then = (onfulfilled) => {
        this.resolves.push(onfulfilled)
        return this
    }
    function resolve(value) {
        setTimeout(() => {
            zpromise.resolves.forEach((callback) => {
                callback(value)
            })
        }, 0);
    }
    fn(resolve)
}

function MyPromise(fn) {
    var promise = this;
    promise._resolves = []
    this.then = (onFulfilled) => {
        promise._resolves.push(onFulfilled)
        return this
    }
    resolve = (prevResult) => {
        setTimeout(() => {
            this._resolves.forEach((callback) => {
                callback(prevResult)
            })
        }, 0);
    }
    fn(resolve)
}