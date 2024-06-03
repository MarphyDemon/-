# js

## js 数据类型、基本数据类型和引用数据类型的区别

## 如何判断数据类型

## instanceOf 和 typeOf 有什么区别

## js 数组方法有哪些

## foreach 和 map 有什么区别

## for in 和 for of 有什么区别

## 为什么 0.1+0.2 != 0.3

## 防抖和节流

## apply 、 bind 、 call 有这么区别

## try catch 可以捕获异步代码中的错误吗

## 说说 js 垃圾回收机制

## 什么是内存泄露、栈溢出，什么情况会导致

## 介绍下 promise 、 promise all 和 race 有什么区别

### promise 输出

```js
    console.log('script start')
    let promise1 = new Promise(function (resolve) {
    ​    console.log('promise1')
    ​    resolve()
    ​    console.log('promise1 end')
    }).then(function () {
    ​    console.log('promise2')
    })
    setTimeout(function(){
    ​    console.log('settimeout')
    })
    console.log('script end')
```

## promise 、 generator 、 async/await 这三者的关联和区别是什么

## js 中的原型和原型链分别是什么

## js 如何实现继承
