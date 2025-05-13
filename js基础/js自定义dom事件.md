# js 自定义事件

1）通过 Event 创建 customEvent。使用 document.addEventListenter 进行监听。
2）通过 customEvent 创建自定义事件。例如 const click = new CustomEvent("myClick");

可以通过 dom.dispatchEvent()触发事件。
