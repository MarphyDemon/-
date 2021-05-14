function add() {
  const arr = [...arguments]
  let sum = 0
  arr.map((element) => (element ? (sum = sum + element) : sum))
  return sum
}

function currying(fn) {
  let resultArr = []
  return function c(...newArgs) {
    if (newArgs.length) {
      resultArr = [...newArgs, ...resultArr]
      return c
    } else {
      return fn.apply(this, resultArr)
    }
  }
}
const p = currying(add)
console.log(p(1)(2)(3)(4)())
