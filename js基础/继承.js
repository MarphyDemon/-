// 原型链
function Parent(name) {
  this.name = name
  this.score = () => {
    return 80
  }
}

Parent.prototype.age = 12

function Child(name) {
  this.name = name
  this.score = () => {
    return 10
  }
}

Child.prototype = new Parent()
Child.prototype.age = 9

var parent = new Parent('cc')
var child1 = new Child('mi')
var child2 = new Child('zi')
console.log(
  child1,
  child1.age,
  child1.score(),
  parent.age,
  parent.score(),
  parent instanceof Parent
)

// 构造函数继承
function ChildT(name) {
  Parent.call(this, name)
  this.age = 'childT age is 12'
  this.score = () => {
    return 'childT score is 32'
  }
}
const t = new ChildT('childT')
console.log(t.name, t.age, t.score(), t instanceof Parent)

// 组合继承
function ChildTH(name) {
  Parent.call(this, name)
  this.age = 'childTH age is 78'
}

ChildTH.prototype = new Parent()

const th = new ChildTH('childth')
console.log(th.name, th.age, th instanceof Parent)

// Object.create   非继承
let childC = Object.create(Parent)
childC.name = 'childC'
childC.age = '10'
console.log(childC, childC instanceof Parent)
