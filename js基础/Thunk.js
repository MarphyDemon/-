// js中，Thunk替换多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
// https://es6.ruanyifeng.com/#docs/generator-async
// es5
function Thunk(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments, 1)
    return function (callback) {
      args.push(callback)
      return fn.apply(this, args)
    }
  }
}

function Thunk(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments, 1)
    return function (callback) {
      args.push(callback)
      fn.apply(this, args)
    }
  }
}

// es6
function Thunk(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}

function Thunk(fn) {
  return function (...args) {
    return function (callback) {
      fn.call(this, ...args, callback)
    }
  }
}

function f(a, cb) {
  cb(a)
}

const ft = Thunk(f)
function callback(value) {
  console.log(value)
}

ft(1)(callback)

// Thunk函数的自动流程管理，yield函数必须通过thunk函数包装
function run(fn) {
  var gen = fn()
  function next(err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(next)
  }
  next()
}

function run(fn) {
  var gen = fn()
  function next(err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(data)
  }
  next()
}

function fun(fn) {
  var gen = fn()
  function next(err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(data)
  }
  next()
}

// 基于promise对象的自动执行，yield函数必须是一个promise对象
function run(fn) {
  var gen = fn()
  function next(data) {
    var result = gen.next(data)
    if (result.done) return result.value
    result.value.then(function (res) {
      next(res)
    })
  }
  next()
}

function run(fn) {
  var gen = fn()
  function next(data) {
    var result = gen.next(data)
    if (result.done) return result.value
    result.value.then(function (res) {
      next(res)
    })
  }
  next()
}

function run(fn) {
  var gen = fn()
  function next(data) {
    var result = gen.next(data)
    if (result.done) return result.value
    result.value.then(function (res) {
      next(res)
    })
  }
  next()
}

var arr = [1]

console.log(Array.isArray(arr))
console.log(Object.prototype.toString.call(arr) === '[object Array]')
console.log(arr.constructor === Array)
console.log(arr instanceof Array)
