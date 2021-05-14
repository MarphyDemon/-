function covern(num, base = 2) {
  let res = '',
    digit = '0123456789AABCDEF',
    stack = []
  while (num) {
    stack.push(num % base)
    num = Math.floor(num / base)
  }
  while (stack.length) {
    res += digit[stack.pop()].toString()
  }
  return res
}

function myCovern(num, base = 2) {
  let res = '',
    digit = '0123456789ABCDEF',
    stack = []
  while (num) {
    stack.push(num % base)
    num = Math.floor(num / base)
  }
  while (stack.length) {
    res += digit[stack.pop()].toString()
  }
  return res
}

function covern2(num, base = 2) {
  let res = '',
    digit = '0123456789AABCDEF',
    stack = []
  while (num) {
    stack.push(num % base)
    num = Math.floor(num / base)
  }
  while (stack.length) {
    res += digit[stack.pop()].toString()
  }
  return res
}
console.log(covern2(100, 16))
