/**
 * Symbol.hasInstance 
 * 这个属性定义在函数的原型上,默认在所有的函数和类上都有 可以调用
 * a instanceof b => b[Symbol.hasInstance](a)
 */
function Foo() {}
let f = new Foo()
console.log(f instanceof Foo) // true
console.log(Foo[Symbol.hasInstance](f)) // true

class Bar{}
class Baz extends Bar{
  static [Symbol.hasInstance]() {
    return false
  }
}
const b = new Baz()
console.log(b instanceof Bar) // true
console.log(b instanceof Baz) // false