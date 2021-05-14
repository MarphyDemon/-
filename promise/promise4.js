// 串行promise和 异步结果的传递

function Promise(fn) {
  var promise = this,
    value = null
  promise._resolves = []
  promise._status = 'PENDING'

  this.then = function (onFulfilled) {
    return new Promise(function (resolve) {
      function handle(value) {
        var ret =
          (typeof onFulfilled === 'function' && onFulfilled(value)) || value
        resolve(ret)
      }
      if (promise._status === 'PENDING') {
        promise._resolves.push(handle)
      } else if (promise._status === FULFILLED) {
        handle(value)
      }
    })
  }

  function resolve(value) {
    setTimeout(function () {
      promise._status = 'FULFILLED'
      promise._resolves.forEach(function (callback) {
        value = callback(value)
      })
    }, 0)
  }

  fn(resolve)
}

function MyPromise(fn) {
  var promise = this
  promise._resolves = []
  promise._status = 'pedding'
  var value = null

  this.then = (onFulfilled) => {
    return new MyPromise((resolve) => {
      handle = (value) => {
        var ret =
          (typeof onFulfilled === 'function' && onFulfilled(value)) || value
        resolve(ret)
      }
      if (promise._status === 'pedding') {
        promise._resolves.push(handle)
      } else {
        handle(value)
      }
    })
  }

  resolve = (value) => {
    setTimeout(() => {
      promise._status = 'fulfilled'
      promise._resolves.forEach((callback) => {
        callback(value)
      })
    }, 0)
  }
  fn(resolve)
}
