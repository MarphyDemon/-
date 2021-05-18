console.log('script start')
setTimeout(() => {
  console.log('北歌')
}, 1 * 2000)
Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

async function foo() {
  await bar()
  console.log('async1 end')
}
foo()

async function errorFunc() {
  try {
    await Promise.reject('error!!!')
  } catch (e) {
    console.log(e)
  }
  console.log('async1')
  return Promise.resolve('async1 success')
}
errorFunc().then((res) => console.log(res))

function bar() {
  console.log('async2 end')
}

console.log('script end')

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

Promise.resolve()
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })
console.log('script end')
script start  script end  promise1  promise2 setTimeout

const p1 = () =>
  new Promise((resolve, reject) => {
    console.log(1)
    let p2 = new Promise((resolve, reject) => {
      console.log(2)
      const timeOut1 = setTimeout(() => {
        console.log(3)
        resolve(4)
      }, 0)
      resolve(5)
    })
    resolve(6)
    p2.then((arg) => {
      console.log(arg)
    })
    p2.then((arg) => {
      console.log(arg)
    })
  })
const timeOut2 = setTimeout(() => {
  console.log(8)
  const p3 = new Promise((reject) => {
    reject(9)
  }).then((res) => {
    console.log(res)
  })
}, 0)

p1().then((arg) => {
  console.log(arg)
})
console.log(10)

// 从全局上下文出发，先执行同步代码，同步代码执行完成后，收集微任务与宏任务，先清空微任务队列，再执行宏任务。
// 如果这期间遇到宏任务/微任务，将其放入对应的层级执行

function a() {
  return new Promise((resolve) => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
      resolve()
    }, 500)
  }).then(() => {
    console.log(3)
  })
}
function c() {
  console.log(4)
  a()
  console.log(5)
}
c()
