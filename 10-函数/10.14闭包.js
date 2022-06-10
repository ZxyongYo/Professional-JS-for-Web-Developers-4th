/*
  闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。
*/
function createComparisonFunction(propertyName) {
  return function(object1, object2) {
    let value1 = object1[propertyName]
    let value2 = object2[propertyName]
    if (value1 < value2) {
      return -1
    } else if (value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}

const list = [
  {name: 'Lee', age: 12},
  {name: 'Matt', age: 8},
  {name: 'Tom', age: 16},
]
const compareAges = createComparisonFunction('age')
let result = list.sort(compareAges)
console.log(result)