// 变量提升
// var 存在变量提升  let不存在变量提升
function a() {
  console.log(name)
  console.log(age)
  console.log(sex)
  var name = 'ldd'
  let age = 31
  const sex = 'nan'
}

a() // undefined + 报错

// var 变量提升
console.log(b)
var b = 10
// 等价于
var b
console.log(b)
b = 10

// js中的function也存在变量提升
c()
function c() {
  console.log('c')
}

// es6中没有变量提升，所以报错
d()
d = () => {
  console.log('d')
}

// 闭包面试题
function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n)
    },
  }
}

var a = fun(0) // undefined
a.fun(1) // 0
a.fun(2) // 0
a.fun(3) // 0
var b = fun(0).fun(1).fun(2).fun(3)
// fun(0) // undefined
// fun(0).fun(1) // 0
// fun(0).fun(1).fun(2) // 1
// fun(0).fun(1).fun(2).fun(3) // 2
var c = fun(0).fun(1)
// fun(0) // undefined
// fun(0).fun(1) // 0
c.fun(2) // 1
c.fun(3) // 1
