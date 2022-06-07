/* 为了解决原型包含引用值导致的继承问题 */

function SuperType(otherColors) {
  this.colors = ['red', 'blue', 'green', ...otherColors]
}
function SubType() {
  // 继承 SuperType
  SuperType.call(this, ['pink', 'white'])
}

let instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors)

let instance2 = new SubType()
console.log(instance2.colors)