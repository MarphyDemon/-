# js 事件机制

js 事件先进行捕获阶段，到达目标元素后，开始冒泡。
执行流程如下：
window->document->html->body->container->container->body->html->document->window
需要注意的是根元素是 window 对象。

如何阻断 js 事件的默认行为：使用 preventDefault。例如 a 标签的跳转。冒泡，不执行默认事件。
如何阻断冒泡行为：使用 stopPropagation。不冒泡，执行默认事件。
如何阻止 js 事件的默认行为和冒泡行为：使用 return false。不冒泡不执行默认事件。
stopImmediatePropagation: 执行 stopImmediatePropagation 发放后，目标元素上后续绑定的其他事件均不会执行响应。且会阻止事件冒泡。

如何获取到 html？
var html = document.documentElement;
