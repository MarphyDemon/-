// 发布订阅模式
// 优点
// 灵活 发布者和订阅者可以不在一起，随处可调用
// 缺点
// 1 发布订阅过多造成代码量大，难以维护
// 2 量大易引起时间队列多，导致内存消耗大

// 观察者模式   vue mobx
// 优点
// 响应式 被观察者改变后，观察者可进行自动更新
// 缺点
// 不灵活 观察者和被观察者在耦合在一起，需要同时引入才能达到目的
// 写一个发布订阅模式的例子;
class Event {
  constructor() {
    this.eventListens = [];
  }
  // 订阅
  on(eventType, fn) {
    if (!this.eventListens[eventType]) {
      this.eventListens[eventType] = [];
    }
    this.eventListens[eventType].push(fn);
  }
  // 发布
  emit(eventType, value) {
    const callbacks = this.eventListens[eventType];
    if (callbacks) {
      callbacks.forEach((e) => {
        e(value);
      });
    }
  }
}
// Event充当事件中心，提供了发布订阅的方法
const e = new Event();
// 订阅者订阅时只关注订阅了某个事件并不关注谁发布
e.on("open", (data) => {
  console.log(data);
});
// 发布者发布事件时只关注发布了此事件，并不关注谁订阅了此事件
e.emit("open", { key: 1 });
// 发布订阅模式的应用
// 1. 在vue中eventBus中，可以通过eventBus.$on去订阅，通过eventBus.$emit去触发。
// 2. 小程序2.0项目中的事件总线，提供了当前页面的事件传递，创建了一个事件实体，可以在页面或组件挂载时通过on去监听，在其他组件或实体中通过emit触发。
// 需要注意的是，发布订阅，在页面或者组件卸载时需要取消订阅。例如小程序2.0中通过off去取消订阅。
