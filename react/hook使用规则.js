// react 确保在不使用class的情况下可以在内部创建state使用state等react特性。
// react hook确保位于react函数组件的最顶层调用，不能应用于判断、循环、嵌套函数中，这样才能确保执行顺序。
// 由于useState useEffect等hook的内部实现，导致需要依赖执行顺序才能确保我们的state与useState一一对应。

// 使用hook的优势
// 1 代码组合更优雅
// 2 可复用性，如ahooks
// 3 代码简洁
// 4 逻辑更清晰
// 5 单元测试,hook本身是一个单独的函数,更方便单元测试

// 在react16之前，函数组件只能是无状态组件，也没有生命周期，hook的出现，使得可以在函数组件中使用state、生命周期等特性。

// 使用hooks模拟生命周期
// componentDidMount
useEffect(() => {
  // effect
  return () => {
    // cleanup
  }
}, [])

// componentDidUpdate
useEffect(() => {
  // effect
  return () => {
    // cleanup
  }
})
// 这样每次渲染都会执行，导致可以访问的componentDidMount和componentDidUpdate生命周期。
// 解决方案如下
const ref = useRef()
useEffect(() => {
  if (!ref.current) {
    // componentDidMount
    ref.current = true
  } else {
    // componentDidUpdate
  }
  // effect
  return () => {
    // cleanup
  }
})

// componentDidUnMount
useEffect(() => {
  // effect
  return () => {
    // componentDidUnMount
  }
}, [])

// useEffect异步执行的原因是防止同步执行阻塞游览器渲染。
