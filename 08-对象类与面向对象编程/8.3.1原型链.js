
/*
  构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有
  一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例，那就意味
  着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函
  数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想
 */
function SuperType() {
  this.property = true
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
console.log(instance.getSuperValue())