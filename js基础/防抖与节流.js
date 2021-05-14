// 防抖  在事件被触发ns后执行，如果在这期间又被触发则重新计时
function debounce(fn, delay) {
  let timer
  return function () {
    let _this = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}

// 节流  每隔一段时间，只执行一次函数
function throttle(fn, delay) {
  let timer
  return function () {
    let _this = this
    let args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
      timer = null
    }, delay)
  }
}

// 防抖 事件触发后在ms之后执行，如果这ms内再次被触发则重新计时
function debounce(fn, delay) {
  var timer
  return function () {
    var _this = this
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}

// 节流 每隔ms之后，只触发一次
function throttle(fn, delay) {
  var timer
  return function () {
    var _this = this
    var args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
      timer = null
    }, delay)
  }
}

// 防抖  事件触发后ms后执行，ms内如果再次触发则重新计时
function debounce(fn, delay) {
  var timer
  return function () {
    var _this = this
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}

// 节流  每隔ms内，只执行一次
function throttle(fn, delay) {
  var timer
  return function () {
    var _this = this
    var args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
      timer = null
    }, delay)
  }
}
// 事件触发后ms之后执行，如果ms内再次触发则重新计时
function debounce(fn, delay) {
  var timer
  return function (args) {
    var _this = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this, args)
    }, delay)
  }
}
