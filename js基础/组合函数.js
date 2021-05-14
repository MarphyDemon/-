// TODO
function compose(...funcs) {
  if (funcs.lenght == 0) {
    return (arg) => arg
  }
  if (funcs.length == 1) {
    return funcs[0]
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
  return funcs.reduce((a, b) => {
    return function (...args) {
      a(b(...args))
    }
  })
}

function compose1(...funcs) {
  return function (x) {
    return funcs.reduce((args, fn) => {
      return fn(args)
    }, x)
  }
}

function trim(input) {
  console.log('trim')
  console.log(input)
  return typeof input === 'string' ? input.trim() : input
}
function lowerCase(input) {
  console.log('lowerCase')
  console.log(input)
  return typeof input === 'string' ? input.toLowerCase() : input
}
function upperCase(input) {
  console.log('upperCase')
  return input && typeof input === 'string' ? input.toUpperCase() : input
}
function split(input, delimiter = ',') {
  console.log('split')
  console.log(input)
  return typeof input !== 'string' ? input.split(delimiter) : input
}

const composeFunc = compose(trim, lowerCase, split)
const result = composeFunc('A, B, C')
