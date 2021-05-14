function Promise(fn) {
  var _this = this
  _this.resolves = []
  _this.rejects = []
  _this.value = null
  _this.reason = null
  _this.status = 'pedding'

  // 写错
  this.then = (onFulfilled, onRejected) => {
    return new Promise((resolve, reject) => {
      const handle = (value) => {
        const ret =
          // 写错
          (typeof onFulfilled === 'function' && onFulfilled(value)) || value
        if (ret && typeof ret['then'] === 'function') {
          ret.then(
            (value) => {
              resolve(value)
            },
            (reason) => {
              reject(reason)
            }
          )
        } else {
          resolve(ret)
        }
      }
      const errHandle = (reason) => {
        const errRet =
          (typeof onRejected === 'function' && onRejected(reason)) || reason
        reject(errRet)
      }
      if (_this.status === 'pedding') {
        _this.resolves.push(handle)
        _this.rejects.push(errHandle)
      } else if (_this.status === 'fulfilled') {
        handle(_this.value)
      } else if (_this.status === 'rejected') {
        errHandle(_this.reason)
      }
    })
  }

  const resolve = (value) => {
    // 缺少setTimeout
    setTimeout(() => {
      _this.status = 'fulfilled'
      _this.resolves.forEach((callback) => {
        _this.value = callback(value)
      })
    }, 0)
  }

  const reject = (reason) => {
    setTimeout(() => {
      _this.status = 'rejected'
      _this.rejects.forEach((callback) => {
        _this.reason = callback(reason)
      })
    }, 0)
  }
  fn(resolve, reject)
}

Promise.all = (promises) => {
  if (!Array.isArray(promises)) {
    throw new Error('promises is not an Array')
  }
  // 缺少return new Promise
  return new Promise((resolve, reject) => {
    let len = promises.length
    let result = []
    const resolves = (index) => {
      // 需要返回一个新的函数
      return (value) => {
        resolveAll(index, value)
      }
    }
    const rejects = (reason) => {
      reject(reason)
    }
    const resolveAll = (index, value) => {
      result[index] = value
      if (--len === 0) {
        resolve(result)
      }
    }
    promises.forEach((promise, index) => {
      promise.then(resolves(index), rejects)
    })
  })
}

Promise.race = (promises) => {
  if (!Array.isArray(promises)) {
    throw new Error('must be an Array')
  }
  return new Promise((resolve, reject) => {
    const len = promises.length
    const resolver = (value) => {
      resolve(value)
    }
    const rejecter = (reason) => {
      reject(reason)
    }
    for (let i = 0; i < len; i++) {
      promises[i].then(resolver, rejecter)
    }
  })
}
