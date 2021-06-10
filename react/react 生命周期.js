// react组件分三个周期，挂载期，存在更新期，卸载期。

// 挂载期

// 当一个组件被创建插入到dom中，首先调用construct，集成react的props、初始化state。
// 接下来调用componentWillMount  只执行一次，在componentWillMount中可以调用setState，不会引起render。
// render() 调用render方法，支持返回null或react组件，顶层只能有一个根组件，只能通过props或者state访问数据。
// componentDidMount() 在装载完成后调用一次，render后调用，从这里开始可以通过ReactDOM.findDOMNode(this)获取组件的dom节点。

// 存在更新期

// componentWillReceiveProps 当props发生改变时调用
// shouldComponentUpdate 在react中作为一个关键的优化点，当父组件改变时，子组件全部都会重新渲染，可以通过该钩子返回false阻止渲染。
// 此时还有一个pureComponent 可用来解决，进行props浅层对比。
// componentWillUpdate
// render
// componentDidUpdate

// 卸载期

// componentWillUnmount 移除订阅时间网络请求等

// constructor
// props,state
// componentWillMount
// render
// componentDidMount

// componentReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// render
// componentDidUpdate

// componentWillUnMount
