const Observer = (obj, key, callback) => {
  if (!obj.data) {
    obj.data = {}
  }
  Object.defineProperty(obj, key, {
    get() {
      return obj.data[key]
    },
    set(val) {
      obj.data[key] = val
      callback && callback(val)
    },
  })
  if (obj.data[key]) {
    // callback && callback(obj.data[key])
  }
}

const obj = {
  data: {
    message: 1,
    sex: 1,
  },
}

Observer(obj, 'message', (value) => {
  console.log(value + 1)
})
Observer(obj, 'sex', (value) => {
  console.log(value + 2)
})

const changeObj = () => {
  obj.message = 2
  obj.sex = 4
}
changeObj()

// 观察者模式一对多的关系，在被观察对象触发后，会通知所有观察者，使其自动更新。 vue和mobx。
// 主要由目标和观察者组成
