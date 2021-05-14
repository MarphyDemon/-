
// 添加拒绝方法，添加一个数组方法存放

function Promise(fn) {
    var promise = this;
        promise._value;
        promise._reason;
        promise._resolves = [];
        promise._rejects = [];
        promise._status = 'PENDING';

    this.then = function (onFulfilled, onRejected) {
        return new Promise(function(resolve, reject) {
            function handle(value) {
                var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
                if(ret && typeof ret ['then'] == 'function'){
                    ret.then(function(value){
                       resolve(value);
                    },function(reason){
                       reject(reason);
                    });
                } else {
                    resolve(ret);
                }
            }
            function errback(reason){
                reason = typeof onRejected === 'function' && onRejected(reason) || reason;
                reject(reason);
            }
            if (promise._status === 'PENDING') {
                promise._resolves.push(handle);
                promise._rejects.push(errback);
            } else if(promise._status === 'FULFILLED'){
                handle(promise._value);
            } else if(promise._status === 'REJECTED') {
            errback(promise._reason);
        }
        })
        
    };


    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                value = callback( value);
            })
        },0);
    }

    function reject(value) {
        setTimeout(function(){
            promise._status = "REJECTED";
            promise._rejects.forEach(function (callback) {
                promise._reason = callback(value);
            })
        },0);
    }

    fn(resolve, reject);
}



function MyPromise(fn) {
    var promise = this;
    promise._resolves = []
    promise._rejects = []
    promise._value = null
    promise._reason = null
    promise._status = 'pedding'

    this.then = (onFulfilled, onRejected) => {
        return new MyPromise((resolve, reject) => {
            const handle = (value) => {
                const ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
                if(ret && typeof ret['then'] === 'function') {
                    ret.then((res) => {
                        resolve(res)
                    },(reason) => {
                        reject(reason)
                    })
                } else {
                    resolve(ret)
                }
            }
            const errHandle = (reason) => {
                const errRet =  typeof onRejected === 'function' && onRejected(reason) || reason
                reject(errRet)
            }
            if(promise._status === 'pedding') {
                promise._resolves.push(handle)
                promise._rejects.push(errHandle)
            } else if (promise._status === 'fulfilled') {
                handle(promise._value)
            } else if (promise._status === 'rejected') {
                errHandle(promise._reason)
            }
        })
    }

    const resolve = (value) => {
        setTimeout(() => {
            this._status = 'fulfilled'
            this._resolves.forEach((callback) => {
                callback(value)
            })
        },  0);
    }

    const reject = (reason) => {
        setTimeout(() => {
            this._status = 'rejected'
            this._rejects.forEach((errCallback) => {
                errCallback(reason)
            })
        }, 0);
    }

    fn(resolve, reject)
}

const a = (b) => {
    return new MyPromise((resolve, reject) => {
        if(b) {
            resolve(1)
        } else {
            reject(2)
        }
    })
}

a(true).then((b) => {
    return b+1
}).then((c)=>{
    console.log(c)
})


a(false).then((b) => {
    console.log(b+2)
},(err) => {
    console.log("err", err+1)
})



function MyPromise1(fn) {
    var promise = this;
    promise._resolves = []
    promise._rejects = []
    promise._status = 'pedding'
    promise._value = null
    promise._reason = null

    this.then = (onFulfilled, onRejected) => {
        return new MyPromise1((resolve, reject) => {
            const handle = (value) => {
                const ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
                if(ret && typeof ret['then'] === 'function') {
                    ret.then((res)=> {
                        resolve(res)
                    }, (errRes) => {
                        reject(errRes)
                    })
                } else {
                    resolve(ret)
                }
            }
            const errHandle = (reason) => {
                const errRet = typeof onRejected === 'function' && onRejected(reason) || reason
                reject(errRet)
            }
            if(promise._status === 'pedding') {
                promise._resolves.push(handle)
                promise._rejects.push(errHandle)
            } else if(promise._status === 'fulfilled') {
                // resolve(handle)   // 错误
                handle(promise._value)
            } else if(promise._status === 'rejected'){
                // resolve(errHandle)  // 错误
                errHandle(promise._reason)
            }
        })
    }

    const resolve = (value) => {
        setTimeout(() => {
            promise._status = 'fulfilled'
            promise._resolves.forEach((callback) => {
                promise._value = callback(value)
            })
        }, 0);
    }

    const reject = (reason) => {
        setTimeout(() => {
            promise._reason = 'rejected'
            promise._rejects.forEach((errCallback) => {
                promise._reason = errCallback(reason)
            })
        }, 0);
    }

    fn(resolve, reject)
}


const a = (b) => {
    return new MyPromise1((resolve, reject) => {
        if(b) {
            resolve(1)
        } else {
            reject(2)
        }
    })
}

a(true).then((b) => {
    return b+1
}).then((c)=>{
    console.log(c)
})


a(false).then((b) => {
    console.log(b+2)
},(err) => {
    console.log("err", err+1)
})

function MyPromise2(fn){
    var promise = this;
    promise._resolves = []
    promise._rejects = []
    promise._status = 'pedding'
    promise._reason = null
    promise._value = null
    this.then = (onFulfilled, onRejected) => {
        return new MyPromise2((resolve, reject) => {   // 遗忘  promise的方法入参只有resolve reject
            const handle = (value) => {
                const ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
                if(ret && typeof ret['then'] === 'function') {
                    ret.then((res) => {
                        resolve(res)  //  写错
                    }, (reason) => {
                        reject(reason)  // 写错
                    })
                } else {
                    resolve(ret)
                }
            }
            const errHandle = (reason) => {
                const errRet = typeof onRejected === 'function' && onRejected(reason) || reason
                reject(errRet)
            }
            if(promise._status === 'pedding') {
                promise._resolves.push(handle)
                promise._rejects.push(errHandle)
            } else if(promise._status === 'fulfilled') {
                handle(promise._value)
            } else if(promise._status === 'rejected') {
                errHandle(promise._reason)
            }
        })
    }

    const resolve = (value) => {
        setTimeout(() => {
            promise._status = 'fulfilled'
            promise._resolves.forEach((callback) => {
                promise._value = callback(value)
            })
        }, 0);
    }

    const reject = (reason) => {
        setTimeout(() => {
            promise._status = 'rejected'
            promise._rejects.forEach((callback) => {
                promise._reason = callback(reason)
            })
        }, 0);
    }
    fn(resolve, reject)
}