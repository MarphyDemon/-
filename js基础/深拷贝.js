function DeepClone(obj) {
  let result = {}
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    throw new Error('not Object')
  }
  Object.keys(obj).forEach((key) => {
    if (Object.is(obj[key])) {
      result[key] = DeepClone(obj[key])
    } else if (Array.isArray(obj[key])) {
      result[key] = [...obj[key]]
    } else {
      result[key] = obj[key]
    }
  })
  return result
}

var object = {
  key1: 'aaaa',
  key2: [12, 32, 42],
  key3: {
    key31: '2222',
    key32: [12, 43, 21],
    key33: () => {
      console.log('key33')
    },
    key34: {
      key341: '2332',
    },
  },
}

var result = DeepClone(object)
console.log(result)

// 判断元素类型  Object.prototype.toString.call()
