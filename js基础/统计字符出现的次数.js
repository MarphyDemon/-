// 统计字符串中每个字符出现的次数
let arr = ['a1', 'a3', 'a1', 'a5', 'a7', 'a1', 'a3', 'a4', 'a2', 'a1']
let count = arr.reduce((accumulator, current) => {
  if (accumulator.hasOwnProperty(current)) {
    accumulator[current]++
  } else {
    accumulator[current] = 1
  }
  return accumulator
}, {})
console.log(count)

function f(arr) {
  return arr.reduce((e, cur) => {
    if (e.hasOwnProperty(cur)) {
      e[cur]++
    } else {
      e[cur] = 1
    }
    return e
  }, {})
}
console.log(f(arr))
