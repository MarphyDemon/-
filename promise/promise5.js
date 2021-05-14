
// 添加了对promise对象的判断
//串行 Promise
//串行 Promise 是指在当前 promise 达到 fulfilled 状态后，即开始进行下一个 promise（后邻 promise）。
//例如我们先用ajax从后台获取用户的的数据，再根据该数据去获取其他数据。
function Promise(fn) {
    var promise = this,
        value = null;
        promise._resolves = [];
        promise._status = 'PENDING';

    this.then = function (onFulfilled) {
        return new Promise(function(resolve) {
            function handle(value) {
                var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
                if( ret && typeof ret['then'] == 'function'){
                    ret.then(function(value){
                       resolve(value);
                    });
                } else {
                    resolve(ret);
                }
            }
            if (promise._status === 'PENDING') {
                promise._resolves.push(handle);
            } else if(promise._status === FULFILLED){
                handle(value);
            }
        })
        
    };


    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                value = callback.call(promise, value);
            })
        },0);
    }

    fn(resolve);
}

function MyPromise(fn) {
    var promise = this;
    promise._resolves = [];
    promise._status = 'pedding';
    var value = null;

    this.then = (onFulfilled) => {
        return new MyPromise((resolve) => {
            const handle = (value) => {
                const ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
                if(ret && typeof ret['then'] === 'function') {
                    ret.then((res) => {
                        resolve(res)
                    })
                } else {
                    resolve(ret)
                }
            }
            if(promise._status === 'pedding') {
                promise._resolves.push(handle)    // 1 易错
            }else if(promise._status === 'fulfilled') {
                handle(value)   // 2 易错
            }
        })
    }

    const resolve = (value) => {
        setTimeout(() => {
            this._status = 'fulfilled'
            promise._resolves.forEach((callback) => {
                // callback(value) //  3易错
                value = callback.call(promise, value)
            })
        }, 0);
    }
    fn(resolve)
}


const a = () => {
    return new MyPromise((resolve) => {
        if(true) {
            resolve(2)
        }
    })
}

a().then((b) => {
    return b+1
}).then((c)=>{
    console.log(c)
})

function MyPromise1(fn) {
    var promise = this;
    var value = null;
    promise._resolves = [];
    promise._status = 'pedding';

    this.then = (onFulfilled) => {
        return new MyPromise1((resolve) => {
            const handle = (value) => {
                const ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
                if(ret && ret['then'] === 'function') {
                    ret.then((res) => {
                        resolve(res)
                    })
                } else {
                    resolve(ret)
                }
            }
            if(promise._status === 'pedding') {
                promise._resolves.push(handle)
            } else if(promise._status === 'fulfilled') {
                handle(value)
            }
        })
    }
    
    const resolve = (value) => {
        setTimeout(() => {
            promise._status = 'fulfilled'
            promise._resolves.forEach((callback) => {
                callback.call(promise, value)
            })
        }, 0);
    }

    fn(resolve)
}

const a = () => {
    return new MyPromise1((resolve) => {
        if(true) {
            resolve(2)
        }
    })
}

a().then((b) => {
    return b+1
}).then((c)=>{
    console.log(c)
})