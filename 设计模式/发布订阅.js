class Event {
  constructor() {
    this.eventListens = []
  }
  // 订阅
  on(eventType, fn) {
    if (!this.eventListens[eventType]) {
      this.eventListens[eventType] = []
    }
    this.eventListens[eventType].push(fn)
  }
  // 发布
  emit(eventType, value) {
    const callbacks = this.eventListens[eventType]
    if (callbacks) {
      callbacks.forEach((e) => {
        e(value)
      })
    }
  }
}
// Event充当事件中心，提供了发布订阅的方法
const e = new Event()
// 订阅者订阅时只关注订阅了某个事件并不关注谁发布
e.on('open', (data) => {
  console.log(data)
})
// 发布者发布事件时只关注发布了此事件，并不关注谁订阅了此事件
e.emit('open', { key: 1 })
