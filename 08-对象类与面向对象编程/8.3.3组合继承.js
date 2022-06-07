/*
  组合继承综合了原型链和盗用构造函数，将两者的优点集中了起来。
  基本思路是使用原型链继承原型上的属性和方法，通过盗用构造函数继承实例属性。
  这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
*/
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)
  this.age = age
}

// 继承方法
SubType.prototype = new SuperType()
SubType.prototype.sayAge = function () {
  console.log(this.age)
}

let instance1 = new SubType('Nicholas', 14)
instance1.colors.push('black')
console.log(instance1.colors) // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName() // Nicholas
instance1.sayAge() // 14

let instance2 = new SubType('Greg', 45)
console.log(instance2.colors) // [ 'red', 'blue', 'green' ]
instance2.sayName() // Greg
instance2.sayAge() // 45