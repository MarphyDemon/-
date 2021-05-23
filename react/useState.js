// hooks不能和if for等嵌套
let memo = []
let idx = 0
function useState(initial) {
  memo[idx] = memo[idx] || initial
  function setState(cur) {
    memo[idx] = cur
    idx = 0
    render(<A />, document.getElementById('root'))
  }
  return [memo[idx++], setState]
}

let memo = []
let index = 0
function useState(initial) {
  memo[index] = memo[index] || initial
  function setState(curValue) {
    memo[index] = curValue
    index = 0
    render(<App />, document.getElementById('root'))
  }
  return [memo[index++], setState]
}
