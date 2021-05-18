function Person() {}
//在原型上定义相关方法
Person.prototype = {
  setName: function (name) {
    this.name = name
    return this
  },
  setAge: function (age) {
    this.age = age
    return this
  },
}
//实例化
var person = new Person()
person.setName('Mary').setAge(20)
console.log(person)

function Person() {
  //在原型上定义相关方法
  return {
    setName: function (name) {
      this.name = name
      return this
    },
    setAge: function (age) {
      this.age = age
      return this
    },
  }
}
//实例化
var person = Person()
person.setName('Mary').setAge(20)
console.log(person)
