// call和apply调用一个具有给定this值的函数，不同点是apply接受数组，call接受参数的展开形式
// fn.apply(this, arguments)    fn.call(this, ...arguments)
Function.prototype.myCall = () => {
  let [_this, ...args] = [...arguments]
  _this = Object(_this) || window
  let fn = Symbol()
  _this[fn] = this
  let result = _this[fn](...args)
  delete _this[fn]
  return result
}
// apply接受数组
Function.prototype.myApply = function () {
  let [_this, args] = arguments //  获取传入的this及参数
  _this = Object(_this) || window // 纠正this
  fn = Symbol() // 获取一个唯一值
  _this[fn] = this // 将当前执行函数this给到传入this下的唯一属性
  let result = _this[fn](...args) // 执行函数获取结果
  delete _this[fn] // 删除this下的属性
  return result // 返回结果
}

// bind  创建一个新函数  新函数的this指定为bind的第一个参数，其余的参数作为入参
Function.prototype.myBind = function () {
  let [_this, ...args] = arguments
  return (...newArgs) => {
    this.call(_this, ...args, ...newArgs)
  }
}
Function.prototype.bind = function () {
  let [_this, ...args] = arguments
  return function (...newArgs) {
    this.call(_this, ...args, ...newArgs)
  }
}
