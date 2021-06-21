// 实现求和函数add
// 执行 add(1)(2)(3)(4)()
// 输出 10

// 执行 add(1)(2)(3)(4)(5)()
// 输出 15

// function add (...args) {
// 	return args.reduce((a, b) => a + b)
// }

// function currying (fn) {
// 	let args = []
// 	return function _c (...newArgs) {
// 		if (newArgs.length) {
// 			args = [
// 				...args,
// 				...newArgs
// 			]
// 			return _c
// 		} else {
// 			return fn.apply(this, args)
// 		}
// 	}
// }

// let addCurry = currying(add)
// // 注意调用方式的变化
// console.log(addCurry(1)(2)(3)(4, 5)())

// const add = (...args) => {
//   let sum = 0
//   args.map(a => a ? sum = a + sum : sum)
//   return sum
// }

// function fn(f) {
//   let arr = []
//   return function _c(...args) {
//     if(args.length) {
//       arr = [
//         ...arr,
//         ...args
//       ]
//       return _c
//     } else {
//       return f.apply(this, arr)
//     }
//   }
// }

// let addf = fn(add)
// console.log(addf(1)(2)(3)(4)())

// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }
// async function async2() {
//     console.log('async2')
// }

// console.log("211212")

// setTimeout(function() {
//     console.log("setTimeout")
// }, 0);

// async1()

// new Promise((resolve)=> {
//     console.log('promise1')

//  resolve(true)

// }).then(()=>{
//     console.log('promise2')
// })

// console.log('end')

// react  hook

// useEffect和componentDidMount

// useEffect 参数及如何卸载    卸载相当于componentWillUnmount

// useState是异步？如何才能变同步

// const  [n, setN] = useState(0)

// setN(n+1)

// setN(n+2)  // 2

// setN(x => x+1)

// setN(y => y+2) // 3

// vue2为什么比vue1快？

// 为啥react设计成单向数据流，redux设计成纯函数

// 异常上报    https://segmentfault.com/a/1190000023892200

// 字节跳动前端面试
// 自我介绍

// （小程序相关的）
// 介绍下Taro2和Taro3的区别
// 介绍下Taro3是怎么将React转成小程序的代码
// 介绍下rpx
// 如果设计稿为350尺寸的话，标准的小程序的尺寸是375的话，尺寸怎么转换
// 怎么将es6转成es5

// （React相关）
// react hook的用法
// react redux和redux的区别
// connect是怎么实现的
// 介绍下Hoc和render props
// 介绍用过的es6相关的特性
// 介绍下promise、await、async
// 事件循环（给了一道题，让我把打印结果写出来）

// （两道题目）
// 实现Promise.all
// 对数组及进行原地排序，要求时间复杂度小于n2

// 头条穿山甲

// html语义化

// h5新增元素

// 回流 重绘

// flex布局 flex属性 ---没答上

// 1. flex-grow: 1;
// 2. flex-shrink: 1;
// 3. flex-basis: 0%

// function sayHi() {
//   console.log(name);
//   console.log(age);  // 报错

//   var name = "Lydia";
//   let age = 21;
// }

// 防抖

// 节流

// 写防抖

// **给定一个字符串数组，将字母异位词组合在一起（就是变成一个二维数组）。字母异位词指字母相同，但排列不同的字符串。**

// ["eat", "tea", "tan", "ate", "nat", "bat"]

// [  ["ate","eat","tea"],  ["nat","tan"],  ["bat"] ]

// 上海云砺

// s闭包，原型，jq动态绑定，vue生命周期，路由，如何实现父子组件的通信问题，call/apply的区别和作用

// react里面实现vue的nextTick,页面渲染完成之后渲染数据
// 观察者模式和发布订阅模式有什么区别
// 小程序渲染机制
// promise的catch和then里面的错误抓取有什么区别
// 小程序包减小体积
// 压缩代码、分包、删除无用模块、合并类似功能，如登录等、压缩图片或者cdn
// 如何取宏任务
