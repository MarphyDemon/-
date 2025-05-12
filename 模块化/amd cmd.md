# amd 和 cmd

amd 的主要实现是 require.js
cmd 的主要实现是 sea.js

amd 的是依赖异步加载，不会阻塞页面渲染。加载完成后执行工厂函数，缓存结果。
cmd 是按需加载，在使用的地方通过 require 进行加载。

amd 需要提前声明所有依赖。
cmd 使用时才会加载，需要显式使用 require。且调用是需要使用 seajs.use，模块被加载后不会立即执行。

amd 和 cmd 如何选择使用？决策流程

是否支持 es6？
是：使用 es6 模块+webpack 实现，通过 import 和 export 。
否：继续决策。
依赖关系是否足够复杂？
否：根据团队的技术栈选用 amd（requirejs）或 cmd（seajs）
判断是否需要需要极致的性能？
是：使用 amd（requirejs）
否：使用 cmd（seajs）
判断是否需要同步加载？
是：使用 cmd（seajs）
否：使用 amd（requirejs）
