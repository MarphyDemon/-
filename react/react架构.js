// react16之前
// 协调器
// 渲染器
// 当数据发生改变后，依次递归调用协调器、渲染器对元素进行相应的操作。此过程不可打断，所以此时
// 如果有更高优先级的任务，即会引起页面渲染不流畅、卡顿等问题。
// 如果在此基础上进行打断操作、执行更高优先级的任务，例如一次协调器、渲染器配合完成后即进行页面
// 更新，可能会导致此时页面展示异常，并非我们所需要的结果。

// react16之后
// 调度器
// 协调器
// 渲染器
// 调度器判断当前是否有优先级更高的任务，比如点击事件、输入事件、动画等，如果没有则调用协调器，
// 为元素打标记，找出所有需要增、删、改的元素。在调度器、协调器工作过程中随时可能被打断，执行更
// 高优先级的任务或者当前帧没有多余时间。任务执行完后，交给renderer渲染器，根据标记对元素进行相应的操作。

// react15-react16 协调器更新的最大特点是：将同步更新改为异步可中断更新
