/*
  构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有
  一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例，那就意味
  着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函
  数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想
 */
function SuperType() {
  this.property = true
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subProperty = false
}
/*
  创建 SuperType 的实例赋值给 SubType 的原型, 实现 SubType 对 SuperType 的继承 
  SuperType 实例可以访问的所有属性和方法也会存在于 SubType.prototype
*/
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subProperty
}

const instance = new SubType()
console.log(instance.getSuperValue()) // true

console.log(instance instanceof Object) // true
console.log(instance instanceof SuperType) // true
console.log(instance instanceof SubType) // true

console.log(Object.prototype.isPrototypeOf(instance)) // true
console.log(SuperType.prototype.isPrototypeOf(instance)) // true
console.log(SubType.prototype.isPrototypeOf(instance)) // true

// 原型链继承导致 SubType 的所有实例会共享 SuperType 的引用类型
instance.colors.push('black')
console.log(instance.colors) // [ 'red', 'blue', 'green', 'black' ]
const instance2 = new SubType()
console.log(instance2.colors) // [ 'red', 'blue', 'green', 'black' ]