// 定义一个只能被继承的抽象类
class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new Error('Vehicle cannot be directly instantiated')
    }
    if (!this.foo) {
      throw new Error('Inheriting class must define foo()')
    }
    console.log('success')
  }
}

class Bus extends Vehicle {
  foo() {}
}

class Car extends Vehicle {}

// new Vehicle() // Error: Vehicle cannot be directly instantiated
// new Bus() // success
// new Car() // Error: Inheriting class must define foo()

class SuperArray extends Array {
  shuffle() {
    // 洗牌算法
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this[i], this[j]] = [this[j], this[i]]
    }
  }
}
let a = new SuperArray(1, 2, 3, 4, 5, 6)
console.log(a) // [ 1, 2, 3, 4, 5, 6 ]
a.shuffle()
console.log(a) // [ 4, 6, 3, 5, 1, 2 ]
