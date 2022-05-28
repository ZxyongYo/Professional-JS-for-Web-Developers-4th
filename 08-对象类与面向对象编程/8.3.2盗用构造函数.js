/* 为了解决原型包含引用值导致的继承问题 */

function SuperType() {
  this.colors = ['red', 'blue', 'green']
}
function SubType() {
  // 继承 SuperType
  SuperType.call(this)
}

let instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors)

let instance2 = new SubType()
console.log(instance2.colors)