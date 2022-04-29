/**
 * 所有函数的参数是按值传递的
 * 函数外的值会被复制到函数内部的参数中,
 * 在按值传递参数时,值会被复制到一个局部变量
 */

function addTen(n) {
  n += 10
  return n
}
let count = 20
let result = addTen(count)
console.log(count) // 20
console.log(result) // 30

function setName(obj) {
  obj.name = 'zxyong'
  obj = new Object()
  obj.name = 'xxx'
}
const Person = new Object()
setName(Person)
// @ts-ignore
console.log(Person.name) // zxyong