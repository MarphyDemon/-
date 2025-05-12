# js 面试题

## 前端有哪些方式可以监控错误？

try catch 块

window.onError

promise.catch

window.addEventListener('unhandledrejection', () =>{}) 监听 promise 拒绝错误。

PerformanceObserver 捕获资源加载错误

img onError 捕获静态资源获取错误

react 中也有 componentDidCatch 和 getDerivedStateFromError，前者记录具体的报错信息，后者用于降级 ui 展示。

## try catch 会捕获异步错误吗？

1）使用 async 和 await，await 会等待异步请求结束，如果异步请求返回 reject，此时 catch 会捕获错误。
2）promise.catch 可以捕获请求错误。
3）使用 setTimeout 和 setInterval 创建的异步任务抛出错误，无法被 catch 捕获。因为 setTimeout 创建的宏任务会在当前调用栈清空后执行，他们的执行栈和 trycatch 所处的环境不同，导致无法 catch 到。可以理解为在执行到 throw 时，此时 try 已在之前执行结束。

、、、javaScript
try {
setTimeout(()=> {
throw new Error("Error")
}, 1000)
} catch {
console.log("enter Catch")
}
、、、

## redux

单例模式。主要用于跨层级组件数据共享。保存持久化的数据。
提供一个 store 保存数据，通过 action 触发改变数据的行为，reducer 用于新旧数据的更新。

## react-router
