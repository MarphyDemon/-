// 记忆  函数执行一次后将结果以对象的形式存在内存里，下次调用的时候如果检测到仍然存在则直接通过对象获取结果，不会执行函数
function memoize(fn) {
  var cache = {}
  return function (key) {
    if (!cache[key]) {
      cache[key] = fn.apply(this, arguments)
      return cache[key]
    }
  }
}

function memoize(fn) {
  var cache = {}
  return function (key) {
    if (!cache[key]) {
      cache[key] = fn.apply(this, arguments)
      return cache[key]
    }
  }
}
