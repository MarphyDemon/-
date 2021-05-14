function MyPromise(fn) {
  var promise = this
  promise._resolves = []
  promise._rejects = []
  promise._status = 'pedding'
  promise._value = null
  promise._reason = null

  this.then = (onFulfilled, onRejected) => {
    return new MyPromise((resolve, reject) => {
      let handle = (value) => {
        const ret =
          (typeof onFulfilled === 'function' && onFulfilled(value)) || value
        if (ret && typeof ret['then'] === 'function') {
          ret.then(
            (res) => {
              resolve(res)
            },
            (reason) => {
              reject(reason)
            }
          )
        } else {
          // 遗忘
          resolve(ret)
        }
      }
      let errHandle = (reason) => {
        const errRet =
          (typeof onRejected === 'function' && onRejected(reason)) || reason
        reject(errRet)
      }
      if (promise._status === 'pedding') {
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
      promise._status = 'fulfilled'
      promise._resolves.forEach((callback) => {
        promise._value = callback(value)
      })
    }, 0)
  }

  const reject = (reason) => {
    setTimeout(() => {
      promise._status = 'rejected'
      promise._rejects.forEach((callback) => {
        promise._reason = callback(reason)
      })
    }, 0)
  }

  fn(resolve, reject)
}

MyPromise.all = (promises) => {
  if (!Array.isArray(promises)) {
    throw new Error('promises is not an array')
  }
  return new MyPromise((resolve, reject) => {
    let len = promises.length // 变量
    let result = [] // 变量

    const resolver = (index) => {
      return (value) => {
        resolverAll(index, value)
      }
    }
    const rejecter = (reason) => {
      reject(reason)
    }
    const resolverAll = (index, value) => {
      result[index] = value
      if (--len === 0) {
        resolve(result)
      }
    }
    for (var i = 0; i < len; i++) {
      promises[i].then(resolver(i), rejecter)
    }
  })
}

MyPromise.race = (promises) => {
  if (!Array.isArray(promises)) {
    throw new Error('promises is not an array')
  }
  return new MyPromise((resolve, reject) => {
    const len = promises.length

    const resolver = (value) => {
      resolve(value)
    }

    const rejecter = (reason) => {
      reject(reason)
    }

    for (var i = 0; i < len; i++) {
      promises[i].then(resolver, rejecter) //  resolver没有特定值
    }
  })
}

var getData100 = function () {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('100ms')
    }, 1000)
  })
}

var getData200 = function () {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('200ms')
    }, 2000)
  })
}
var getData300 = function () {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      reject('reject')
    }, 3000)
  })
}

getData100()
  .then(function (data) {
    console.log(data) // 100ms
    return getData200()
  })
  .then(function (data) {
    console.log(data) // 200ms
    return getData300()
  })
  .then(
    function (data) {
      console.log(data) // 100ms
    },
    function (data) {
      console.log(data)
    }
  )

MyPromise.all([getData100(), getData200()]).then(function (data) {
  console.log(data) // 100ms
})

MyPromise.race([getData100(), getData200(), getData300()]).then(function (
  data
) {
  console.log(data) // 100ms
})
