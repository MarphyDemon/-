var arr = [1, 2, [{ a: 3 }, undefined, 4, null], [[5], 6]]
var result = []
function getArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getArr(arr[i])
    } else if (Object.prototype.toString.call(arr[i]) === '[object Object]') {
      Object.keys(arr[i]).forEach((item) => {
        if (
          Object.prototype.toString.call(arr[i][item]) === '[object Object]'
        ) {
          getArr(arr[i][item])
        } else {
          result.push(arr[i][item])
        }
      })
    } else if (
      Object.prototype.toString.call(arr[i]) === '[object Undefine]' ||
      Object.prototype.toString.call(arr[i]) === '[object Null]'
    ) {
    } else if (arr[i]) {
      result.push(arr[i])
    }
  }
  return result
}

// console.log(getArr(arr))

function getArr1(arr) {
  arr.reduce((result = [], next) => {
    if (Array.isArray(next)) {
      return result.concat(...getArr1(next))
    } else if (Object.prototype.toString.call(next) === '[object Object]') {
      Object.keys(next).forEach((item) => {
        if (Object.prototype.toString.call(item) === '[object Object]') {
          return result.concat(...getArr1(next[item]))
        } else {
          result.concat(next[item])
        }
      })
    } else {
      result.concat(next)
    }
    return result
  }, [])
}

getArr1(arr)
